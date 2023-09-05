<script setup lang="ts">
import Input from './library/Input.vue'
import {tableOption} from './interface/options'
import {ref} from 'vue'
const props = defineProps<{
	options:tableOption
}>()
console.log(props.options)
const queryParams:any = ref({}) 
console.log(queryParams)
</script>

<template>
<div class="complex-query-box">
  <div class="complex-query-param">
    <div v-for="(item,index) in options.params" :key="index" class="query-item">
      <span>{{ item.fileName }}</span>
      <Input v-if="item.type==='AInput'" v-model.item="queryParams[item.fileId as any]" :param="item"/>
    </div>
  </div>
</div>
</template>
<style lang="less" scoped>
.complex-query-box {
  .complex-query-param{
    display: flex;

    .query-item {
      width: 300px;
      display: flex;
    }
  }
}
</style>
