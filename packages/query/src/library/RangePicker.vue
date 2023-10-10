<script  setup lang="ts">
import {RangePicker} from 'ant-design-vue'
import {ref,watch} from 'vue'
import { tableOptionItem } from '@complexui/ui'
import dayjs from 'dayjs'
const props = defineProps<{
	param:tableOptionItem,
  modelValue:any,
}>()
const paramValue =ref(props.modelValue)
let emit = defineEmits(["update:modelValue",'clear']);
watch(() => props.modelValue, (newValue) => {
  console.log('newValue',newValue)
  paramValue.value = newValue
})

function updateValue(dataValue: Array<any>) {
  console.log('dataValue',dataValue)
  const date = dataValue
  if(!dataValue) {
    paramValue.value =  null
    emit("update:modelValue", dataValue)
    emit("clear")
  }else {
    if(props.param.timeFormat &&  Array.isArray(props.param.timeFormat)) {
      date[0] = dataValue[0]?dayjs(dataValue[0]).format(props.param.timeFormat[0]):dataValue[0]
      date[1] = dataValue[1]?dayjs(dataValue[1]).format(props.param.timeFormat[1]):dataValue[1]
    }else if(props.param.timeFormat &&  typeof props.param.timeFormat  === "string") {
      date[0] = dataValue[0]?dayjs(dataValue[0]).format(props.param.timeFormat):dataValue[0]
      date[1] = dataValue[1]?dayjs(dataValue[1]).format(props.param.timeFormat):dataValue[1]
    }
    paramValue.value =  date
    emit("update:modelValue", dataValue)
  }

}
</script>
<template>
  <RangePicker 
    :value="paramValue" 
    @calendarChange="updateValue" 
    :valueFormat="param.attrs?.valueFormat?param.attrs?.valueFormat:'YYYY-MM-DD'"
    :placeholder="param.attrs?.placeholder?param.attrs?.placeholder:['开始时间','结束时间']"
    v-bind="$attrs"
    :style="{width:param.width}"
  />
</template>