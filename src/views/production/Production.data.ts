import { BasicColumn, FormSchema } from '/@/components/Table';
import { JVxeColumn, JVxeTypes } from '/@/components/jeecg/JVxeTable/types';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '编号',
    align: 'center',
    dataIndex: 'no',
  },
  {
    title: '名称',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '进货价',
    align: 'center',
    dataIndex: 'price',
  },
  {
    title: '售价',
    align: 'center',
    dataIndex: 'sellingPrice',
  },
  {
    title: '国际售价',
    align: 'center',
    dataIndex: 'internationalSellingPrice',
  },
  {
    title: '重量',
    align: 'center',
    dataIndex: 'weigth',
  },
  {
    title: '长度',
    align: 'center',
    dataIndex: 'length',
  },
  {
    title: '宽度',
    align: 'center',
    dataIndex: 'width',
  },
  {
    title: '高度',
    align: 'center',
    dataIndex: 'heigth',
  },
  {
    title: '颜色',
    align: 'center',
    dataIndex: 'color',
  },
  {
    title: '包装规格',
    align: 'center',
    dataIndex: 'packingSpecifications',
  },
  {
    title: '图片',
    align: 'center',
    dataIndex: 'imageString',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'no',
    component: 'JInput',
  },
  {
    label: '名称',
    field: 'name',
    component: 'JInput',
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'no',
    component: 'Input',
    dynamicRules: ({}) => {
      return [{ required: true, message: '请输入编号!' }];
    },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({}) => {
      return [{ required: true, message: '请输入名称!' }];
    },
  },
  {
    label: '进货价',
    field: 'price',
    component: 'InputNumber',
    dynamicRules: ({}) => {
      return [{ required: true, message: '请输入进货价!' }];
    },
  },
  {
    label: '售价',
    field: 'sellingPrice',
    component: 'InputNumber',
  },
  {
    label: '国际售价',
    field: 'internationalSellingPrice',
    component: 'InputNumber',
  },
  {
    label: '重量',
    field: 'weigth',
    component: 'InputNumber',
  },
  {
    label: '长度',
    field: 'length',
    component: 'InputNumber',
  },
  {
    label: '宽度',
    field: 'width',
    component: 'InputNumber',
  },
  {
    label: '高度',
    field: 'heigth',
    component: 'InputNumber',
  },
  {
    label: '颜色',
    field: 'color',
    component: 'Input',
  },
  {
    label: '包装规格',
    field: 'packingSpecifications',
    component: 'Input',
  },
  {
    label: '图片',
    field: 'imageString',
    component: 'JImageUpload',
    componentProps: {
      fileMax: 0,
    },
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];
//子表单数据
//子表表格配置
export const productionImageColumns: JVxeColumn[] = [
  {
    title: '图片',
    key: 'imageString',
    type: JVxeTypes.image,
    token: true,
    responseName: 'message',
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
];
export const productionPackingColumns: JVxeColumn[] = [
  {
    title: '包装类型',
    key: 'packType',
    type: JVxeTypes.select,
    options: [
      {
        label: '纸箱',
        value: '纸箱',
      },
      {
        label: '袋',
        value: '袋',
      },
    ],
    dictCode: '',
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
  {
    title: '长度',
    key: 'length',
    type: JVxeTypes.inputNumber,
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
  {
    title: '宽度',
    key: 'weigth',
    type: JVxeTypes.inputNumber,
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
  {
    title: '高度',
    key: 'heigth',
    type: JVxeTypes.inputNumber,
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
  {
    title: '数量',
    key: 'quantity',
    type: JVxeTypes.inputNumber,
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
  {
    title: '重量',
    key: 'weight',
    type: JVxeTypes.inputNumber,
    width: '200px',
    placeholder: '请输入${title}',
    defaultValue: '',
  },
];

// 高级查询数据
export const superQuerySchema = {
  no: { title: '编号', order: 0, view: 'text', type: 'string' },
  name: { title: '名称', order: 1, view: 'text', type: 'string' },
  price: { title: '进货价', order: 2, view: 'number', type: 'number' },
  sellingPrice: { title: '售价', order: 3, view: 'number', type: 'number' },
  internationalSellingPrice: { title: '国际售价', order: 4, view: 'number', type: 'number' },
  weigth: { title: '重量', order: 5, view: 'number', type: 'number' },
  length: { title: '长度', order: 6, view: 'number', type: 'number' },
  width: { title: '宽度', order: 7, view: 'number', type: 'number' },
  heigth: { title: '高度', order: 8, view: 'number', type: 'number' },
  color: { title: '颜色', order: 9, view: 'text', type: 'string' },
  packingSpecifications: { title: '包装规格', order: 10, view: 'text', type: 'string' },
  image: { title: '图片', order: 11, view: 'image', type: 'string' },
  //子表高级查询
  productionImage: {
    title: '产品图片',
    view: 'table',
    fields: {
      image: { title: '图片', order: 0, view: 'image', type: 'string' },
    },
  },
  productionPacking: {
    title: '产品包装',
    view: 'table',
    fields: {
      packType: { title: '包装类型', order: 0, view: 'radio', type: 'string', dictCode: '' },
      length: { title: '长度', order: 1, view: 'number', type: 'number' },
      weigth: { title: '宽度', order: 2, view: 'number', type: 'number' },
      heigth: { title: '高度', order: 3, view: 'number', type: 'number' },
      quantity: { title: '数量', order: 4, view: 'number', type: 'number' },
      weight: { title: '重量', order: 5, view: 'number', type: 'number' },
    },
  },
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
