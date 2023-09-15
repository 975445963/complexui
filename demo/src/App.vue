<script setup lang="ts">
// demo/src/App.vue
import {
  Query,
  tableOption
} from '@complexui/ui';
import { ref,onMounted } from 'vue'
const options:tableOption = {
  params:[
  {
      type:'AInput',
      fileId:'companyName8',
      slotName:'companyName8'
    },
    {
      type:'AInput',
      fileId:'companyName',
      fileName:'企业名称1',
      defaultValue:'1'
    },
    {
      type:'AInputNumber',
      fileId:'companyName4',
      fileName:'企业名称2'
    },
    {
      type:'AInputSearch',
      fileId:'companyName2',
      fileName:'企业名称3',
    },
    {
      type:'ARangePicker',
      fileId:'dateTime',
      fileName:'时间',
      timeField:['startTime','endTime'],
      timeFormat:['YYYY-MM-DD 00:00:00','YYYY-MM-DD 23:59:59'],
      width:'310px',
      attrs:{
        placeholder:['1','2'],
        showTime:true
      }
    },
    {
      type:'ASelect',
      fileId:'companyName3',
      fileName:'企业名称4',
      options:[
        {
          value:'1',
          label:'1'
        }
      ],
    }
  ],
  extraParams:[
    {
      type:'AInput',
      fileId:'companyName5',
      fileName:'企业名称5',
      defaultValue:'1'
    },
    {
      type:'ASelect',
      fileId:'companyName6',
      fileName:'企业名称4',
      options:[
        {
          value:'1',
          label:'1'
        }
      ],
    },
    {
      type:'ASelect',
      fileId:'companyName7',
      fileName:'企业名称4',
      options:[
        {
          value:'1',
          label:'1'
        }
      ],
    }
  ]
}
const query = ref()
let defaultParams = {
  companyName:3
}
function show (params:any) {
  console.log(params.companyName)
  query.value.setValue(2,'companyName')
}

</script>

<template>
  <div class="table-query-box">
    <Query :options="options" ref="query" :defaultParams="defaultParams">
      <template v-slot:companyName8="{params}">
    	  <button @click="show(params)">123</button>
      </template>
      <template v-slot:extra-btn>
    	  <button>extra</button>
      </template>
    </Query>
  </div>
</template>
<style lang="less" scoped>
.table-query-box {
  width: 1300px;
}
</style>
