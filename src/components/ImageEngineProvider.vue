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
      required: true,
    },
    stripFromSrc: {
      type: String,
    },
  },
  provide() {
    return {
      deliveryAddress: this.deliveryAddress,
      stripFromSrc: this.stripFromSrc,
    };
  },
};
</script>