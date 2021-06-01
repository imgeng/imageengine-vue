<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
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
  provide(): Object {
    return {
      deliveryAddress: this.deliveryAddress,
      stripFromSrc: this.stripFromSrc,
    };
  },
};
</script>