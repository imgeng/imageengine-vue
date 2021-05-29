<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    deliveryAddress: {
      type: String,
    },
  },
  provide() {
    return {
      deliveryAddress: this.deliveryAddress,
    };
  },
};
</script>