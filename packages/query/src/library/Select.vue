<script  setup lang="ts">
import {Select} from 'ant-design-vue'
import {ref,watch} from 'vue'
import { tableOptionItem } from '@complexui/ui'
const props = defineProps<{
	param:tableOptionItem,
  modelValue:any
}>()
const paramValue =ref(props.modelValue)
let emit = defineEmits(["update:modelValue"]);
watch(() => props.modelValue, (newValue) => {
  paramValue.value = newValue
})
function updateValue(data:any) {
  paramValue.value =  data
  emit("update:modelValue",data);
}

</script>
<template>
  <Select 
    :value="paramValue" 
    :placeholder="param.placeholder?param.placeholder:`请选择${param.fileName}`"  
    @change="updateValue" 
    v-bind="$attrs" 
    :options="param.options"
    :style="{width:param.width}"
    allowClear
  />
</template>