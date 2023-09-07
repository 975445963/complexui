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
      type:'AInputSearch',
      fileId:'companyName2',
      fileName:'企业名称',
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
