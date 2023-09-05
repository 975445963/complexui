<script  setup lang="ts">
import {Input} from 'ant-design-vue'
import {ref,watch} from 'vue'
import { tableOptionItem } from '@complexui/ui'
const props = defineProps<{
	param:tableOptionItem,
  modelValue:any
}>()
const paramValue =ref()
let emit = defineEmits(["update:modalValue"]);
watch(props.modelValue, (newValue, oldValue) => {
    console.log('watch 已触发', newValue)
    paramValue.value = newValue
})

function updateValue(event: any) {
  console.log('event',event)
  emit("update:modalValue", event.target.value);
}

</script>
<template>
  <Input  :value="paramValue" @input="updateValue"/>
</template>