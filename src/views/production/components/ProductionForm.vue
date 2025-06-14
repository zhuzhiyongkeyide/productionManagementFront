<template>
  <div>
    <BasicForm @register="registerForm" ref="formRef"/>
    <!-- 子表单区域 -->
    <a-tabs v-model:activeKey="activeKey" animated  @change="handleChangeTabs">
      <a-tab-pane tab="产品图片" key="productionImage" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="productionImage"
          v-if="productionImageTable.show"
          :loading="productionImageTable.loading"
          :columns="productionImageTable.columns"
          :dataSource="productionImageTable.dataSource"
          :height="340"
          :rowNumber="true"
          :rowSelection="true"
          :disabled="formDisabled"
          :toolbar="true"
        />
      </a-tab-pane>
      <a-tab-pane tab="产品包装" key="productionPacking" :forceRender="true">
        <JVxeTable
          keep-source
          resizable
          ref="productionPacking"
          v-if="productionPackingTable.show"
          :loading="productionPackingTable.loading"
          :columns="productionPackingTable.columns"
          :dataSource="productionPackingTable.dataSource"
          :height="340"
          :rowNumber="true"
          :rowSelection="true"
          :disabled="formDisabled"
          :toolbar="true"
        />
      </a-tab-pane>
    </a-tabs>

    <div style="width: 100%;text-align: center" v-if="!formDisabled">
      <a-button @click="handleSubmit" pre-icon="ant-design:check" type="primary">提 交</a-button>
    </div>
  </div>
</template>

<script lang="ts">

  import {BasicForm, useForm} from '/@/components/Form/index';
  import { computed, defineComponent, reactive, ref, unref } from 'vue';
  import {defHttp} from '/@/utils/http/axios';
  import { propTypes } from '/@/utils/propTypes';
  import { useJvxeMethod } from '/@/hooks/system/useJvxeMethods';
  import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils';
  import {getBpmFormSchema,productionImageColumns,productionPackingColumns} from '../Production.data';
  import {saveOrUpdate,productionImageList,productionPackingList} from '../Production.api';

  export default defineComponent({
    name: "ProductionForm",
    components:{
      BasicForm,
    },
    props:{
      formData: propTypes.object.def({}),
      formBpm: propTypes.bool.def(true),
    },
    setup(props){
      const [registerForm, { setFieldsValue, setProps }] = useForm({
        labelWidth: 150,
        schemas: getBpmFormSchema(props.formData),
        showActionButtonGroup: false,
        baseColProps: {span: 6}
      });

      const formDisabled = computed(()=>{
        if(props.formData.disabled === false){
          return false;
        }
        return true;
      });

      const refKeys = ref(['productionImage', 'productionPacking', ]);
      const activeKey = ref('productionImage');
      const productionImage = ref();
      const productionPacking = ref();
      const tableRefs = {productionImage, productionPacking, };
      const productionImageTable = reactive({
        loading: false,
        dataSource: [],
        columns:productionImageColumns,
        show: false
      })
      const productionPackingTable = reactive({
        loading: false,
        dataSource: [],
        columns:productionPackingColumns,
        show: false
      })

      const [handleChangeTabs,handleSubmit,requestSubTableData,formRef] = useJvxeMethod(requestAddOrEdit,classifyIntoFormData,tableRefs,activeKey,refKeys,validateSubForm);

      function classifyIntoFormData(allValues) {
        let main = Object.assign({}, allValues.formValue)
        return {
          ...main, // 展开
          productionImageList: allValues.tablesValue[0].tableData,
          productionPackingList: allValues.tablesValue[1].tableData,
        }
      }

      //表单提交事件
      async function requestAddOrEdit(values) {
        await saveOrUpdate(values, true);
      }

      const queryByIdUrl = '/production/production/queryById';
      async function initFormData(){
        let params = {id: props.formData.dataId};
        const data = await defHttp.get({url: queryByIdUrl, params});
        //设置表单的值
        await setFieldsValue({...data});
        requestSubTableData(productionImageList, {id: data.id}, productionImageTable, ()=>{
          productionImageTable.show = true;
        });
        requestSubTableData(productionPackingList, {id: data.id}, productionPackingTable, ()=>{
          productionPackingTable.show = true;
        });
        //默认是禁用
        await setProps({disabled: formDisabled.value})
      }

      initFormData();

      return {
        registerForm,
        formDisabled,
        formRef,
        handleSubmit,
        activeKey,
        handleChangeTabs,
        productionImage,
        productionPacking,
        productionImageTable,
        productionPackingTable,
      }
    }
  });
</script>