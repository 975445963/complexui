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
let emit = defineEmits(["update:modelValue"]);
watch(() => props.modelValue, (newValue) => {
  paramValue.value = newValue
})

function updateValue(dataValue: any) {
  paramValue.value =  dataValue
  emit("update:modelValue", dataValue);
}
function dateForamt(value:any) {
  return value?null:dayjs(value)
}
</script>
<template>
  <RangePicker :value="paramValue" @change="updateValue" :valueFormat="param.attrs?.valueFormat?param.attrs?.valueFormat:'YYYY-MM-DD'"  v-bind="$attrs" />
</template>