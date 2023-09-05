<script setup lang="ts">
import { hello } from '@complexui/shared';
import { Button } from 'ant-design-vue';

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'World',
  },
);

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <Button
    class="openx-button"
    type="primary"
    @click="clickHandler"
  >
    <slot />
  </Button>
</template>
<style lang="less" scoped>

.openx-button {
  div {
    color: red;
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
}
</style>
