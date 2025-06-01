import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '公司名称',
    align:"center",
    dataIndex: 'companyName'
   },
   {
    title: '联系人',
    align:"center",
    dataIndex: 'contact'
   },
   {
    title: '联系方式',
    align:"center",
    dataIndex: 'contactNumber'
   },
   {
    title: '地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '行业',
    align:"center",
    dataIndex: 'industry'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '公司名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '联系人',
    field: 'contact',
    component: 'Input',
  },
  {
    label: '联系方式',
    field: 'contactNumber',
    component: 'Input',
  },
  {
    label: '地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '行业',
    field: 'industry',
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
  companyName: {title: '公司名称',order: 0,view: 'text', type: 'string',},
  contact: {title: '联系人',order: 1,view: 'text', type: 'string',},
  contactNumber: {title: '联系方式',order: 2,view: 'text', type: 'string',},
  address: {title: '地址',order: 3,view: 'text', type: 'string',},
  industry: {title: '行业',order: 4,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}