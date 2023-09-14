<script  setup lang="ts">
import {InputNumber} from 'ant-design-vue'
import {ref,watch} from 'vue'
import { tableOptionItem } from '@complexui/ui'
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

</script>
<template>
  <InputNumber 
    :value="paramValue" 
    :placeholder="param.placeholder?param.placeholder:`请输入${param.fileName}`" 
    @change="updateValue" 
    v-bind="$attrs" 
    :style="{width:param.width}"
  />
</template>