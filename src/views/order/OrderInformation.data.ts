import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '产品',
    align:"center",
    dataIndex: 'production_dictText'
   },
   {
    title: '客户',
    align:"center",
    dataIndex: 'customer_dictText'
   },
   {
    title: '数量',
    align:"center",
    dataIndex: 'quantity'
   },
   {
    title: '成交单价',
    align:"center",
    dataIndex: 'soldPrice'
   },
   {
    title: '成交总价',
    align:"center",
    dataIndex: 'price'
   },
   {
    title: '运费',
    align:"center",
    dataIndex: 'freight'
   },
   {
    title: '收货人',
    align:"center",
    dataIndex: 'consignee'
   },
   {
    title: '收货电话号码',
    align:"center",
    dataIndex: 'receivePhoneNumber'
   },
   {
    title: '地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '发货时间',
    align:"center",
    dataIndex: 'shipTime',
    customRender:({text}) =>{
      text = !text ? "" : (text.length > 10 ? text.substr(0,10) : text);
      return text;
    },
   },
   {
    title: '物流',
    align:"center",
    dataIndex: 'logistics'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '产品',
    field: 'production',
    component: 'JSearchSelect',
    componentProps:{
       dict:" production,name,id"
    },
  },
  {
    label: '客户',
    field: 'customer',
    component: 'JSearchSelect',
    componentProps:{
       dict:"customer,company_name,id"
    },
  },
  {
    label: '数量',
    field: 'quantity',
    component: 'InputNumber',
  },
  {
    label: '成交单价',
    field: 'soldPrice',
    component: 'InputNumber',
  },
  {
    label: '成交总价',
    field: 'price',
    component: 'InputNumber',
  },
  {
    label: '运费',
    field: 'freight',
    component: 'InputNumber',
  },
  {
    label: '收货人',
    field: 'consignee',
    component: 'Input',
  },
  {
    label: '收货电话号码',
    field: 'receivePhoneNumber',
    component: 'Input',
  },
  {
    label: '地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '发货时间',
    field: 'shipTime',
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD'
    },
  },
  {
    label: '物流',
    field: 'logistics',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

// 高级查询数据
export const superQuerySchema = {
  production: {title: '产品',order: 0,view: 'sel_search', type: 'string',dictTable: " production", dictCode: 'id', dictText: 'name',},
  customer: {title: '客户',order: 1,view: 'sel_search', type: 'string',dictTable: "customer", dictCode: 'id', dictText: 'company_name',},
  quantity: {title: '数量',order: 2,view: 'number', type: 'number',},
  soldPrice: {title: '成交单价',order: 3,view: 'number', type: 'number',},
  price: {title: '成交总价',order: 4,view: 'number', type: 'number',},
  freight: {title: '运费',order: 5,view: 'number', type: 'number',},
  consignee: {title: '收货人',order: 6,view: 'text', type: 'string',},
  receivePhoneNumber: {title: '收货电话号码',order: 7,view: 'text', type: 'string',},
  address: {title: '地址',order: 8,view: 'text', type: 'string',},
  shipTime: {title: '发货时间',order: 9,view: 'date', type: 'string',},
  logistics: {title: '物流',order: 10,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}