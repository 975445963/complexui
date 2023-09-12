<script setup lang="ts">
import {Button,Space} from 'ant-design-vue'
import Input from './library/Input.vue'
import InputNumber from './library/InputNumber.vue'
import InputSearch from './library/InputSearch.vue'
import Select from './library/Select.vue'
import RangePicker from './library/RangePicker.vue'
import {tableOption,tableOptionItem} from './interface/options'
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
    if(item.type === 'ASelect' && item.attrs?.mode && ['multiple','tags'].includes(item.attrs.mode)) {
      params[item.fileId] = item.defaultValue?item.defaultValue:[]
    }else if(item.type === 'ARangePicker') {
      if(item.timeField && item.timeField.length === 2) {
        params[item.timeField[0]] = item.defaultValue?.length?item.defaultValue[0]:null
        params[item.timeField[1]] = item.defaultValue?.length?item.defaultValue[1]:null
      }
      params[item.fileId] = item.defaultValue?item.defaultValue:[]
    }else {
      params[item.fileId] = item.defaultValue?item.defaultValue:null
    }
  })
  return params
}
function search() {
  console.log('search',queryParams.value)
  emit("query",queryParams.value);
}
function reset() {
  let defaultParams:any = init()
  queryParams.value = defaultParams
  emit("reset",queryParams);
}
function rangePickerChange(date:Array<any>,item:tableOptionItem) {
  if(date && date.length === 2) {
    queryParams.value[item.fileId] = date
    if(item.timeField?.length) {
      queryParams.value[item.timeField[0]]=date[0]
      queryParams.value[item.timeField[1]]=date[1]
    }
  }else {
    queryParams.value[item.fileId] = []
    if(item.timeField?.length) {
      queryParams.value[item.timeField[0]]= null
      queryParams.value[item.timeField[1]]= null
    }
  }
 
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
      <InputNumber 
        v-else-if="item.type==='AInputNumber'"
        v-model="queryParams[item.fileId]"
        :param="item"
        class="complex-query-input" 
        v-bind="item.attrs"
        @keydown.enter.stop="search"
      />
      <InputSearch
        v-else-if="item.type==='AInputSearch'"
        v-model="queryParams[item.fileId]"
        :param="item"
        class="complex-query-input" 
        v-bind="item.attrs"
        @search="search"
      />
      <Select
        v-else-if="item.type==='ASelect'"
        v-model="queryParams[item.fileId]"
        :param="item"
        class="complex-query-input" 
        v-bind="item.attrs"
        @change="search"
      />
      <RangePicker
        v-else-if="item.type==='ARangePicker'"
        :model-value="item.fileId"
        @update:modelValue="rangePickerChange($event,item)"
        :param="item"
        class="complex-query-input complex-query-input2" 
        v-bind="item.attrs"
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
      .complex-query-input2 {
        width:250px;
      }
    }
  }
}
</style>
