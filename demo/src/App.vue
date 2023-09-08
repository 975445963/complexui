<script setup lang="ts">
// demo/src/App.vue
import {
  Query,
  tableOption
} from '@complexui/ui';
const options:tableOption = {
  params:[
    {
      type:'AInput',
      fileId:'companyName',
      fileName:'企业名称',
      defaultValue:'1'
    },
    {
      type:'AInputNumber',
      fileId:'companyName4',
      fileName:'企业名称'
    },
    {
      type:'AInputSearch',
      fileId:'companyName2',
      fileName:'企业名称',
    },
    {
      type:'ARangePicker',
      fileId:'dateTime',
      fileName:'时间',
      timeField:['startTime','endTime'],
      attrs:{
        valueFormat:'YYYY-MM-DD HH:mm:ss'
      }
    },
    {
      type:'ASelect',
      fileId:'companyName3',
      fileName:'企业名称',
      options:[
        {
          value:'1',
          label:'1'
        }
      ],
    }
  ],
  extraParams:[]
}
</script>

<template>
  <div>
    <Query :options="options"></Query>
  </div>
</template>
