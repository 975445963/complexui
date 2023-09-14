<script  setup lang="ts">
import {Input} from 'ant-design-vue'
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

function updateValue(event: any) {
  paramValue.value =  event.target.value
  emit("update:modelValue", event.target.value);
}

</script>
<template>
  <Input 
    :value="paramValue" 
    :placeholder="param.placeholder?param.placeholder:`请输入${param.fileName}`" 
    @input="updateValue" 
    v-bind="$attrs" 
    :style="{width:param.width}"
  />
</template>