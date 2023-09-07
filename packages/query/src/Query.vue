<script setup lang="ts">
import {Button,Space} from 'ant-design-vue'
import Input from './library/Input.vue'
import InputSearch from './library/InputSearch.vue'
import {tableOption} from './interface/options'
import {ref} from 'vue'
const props = defineProps<{
	options:tableOption
}>()
const options = props.options
let queryParams:any = ref(init()) 
const emit = defineEmits(['query','reset'])
function init() {
  const params:any= {}
  options.params.forEach(item=>{
    params[item.fileId] = item.defaultValue?item.defaultValue:null
  })
  return params
}
function search() {
  console.log(queryParams.value)
  emit("query",queryParams.value);
}
function reset() {
  let defaultParams:any = init()
  queryParams.value = defaultParams
  emit("reset",queryParams);
}
</script>

<template>
<div class="complex-query-box">
  <div class="complex-query-param">
    <div v-for="(item,index) in options.params" :key="index" class="complex-query-item">
      <span class="complex-query-label">{{ item.fileName }}：</span>
      <Input 
        v-if="item.type==='AInput'"
        v-model="queryParams[item.fileId]"
        :param="item"
        class="complex-query-input" 
        v-bind="item.attrs"
        @keydown.enter.stop="search"
      />
      <InputSearch
        v-if="item.type==='AInputSearch'"
        v-model="queryParams[item.fileId]"
        :param="item"
        class="complex-query-input" 
        v-bind="item.attrs"
        @search="search"
      />
    </div>
    <div class="complex-query-param">
      <Space>
        <Button @click="search" type="primary">查询</Button>
        <Button @click="reset">重置</Button>
      </Space>
    </div>
  </div>
</div>
</template>
<style lang="less" scoped>
.complex-query-box {
  .complex-query-param{
    display: flex;

    .complex-query-item {
      display: flex;
      font-size: 14px;
      align-items: center;
      margin-right:16px;
      .complex-query-label {
        flex: none;
      }
      .complex-query-input {
        width: 200px;
      }
    }
  }
}
</style>
