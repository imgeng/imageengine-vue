<template>
  <source :srcSet="srcSetString" :media="media" v-bind="attributes" />
</template>

<script>
import { generateSrcSetString } from "../utils/service";
export default {
  inject: ["deliveryAddress"],
  props: {
    srcSet: {
      type: Array,
      required: true,
    },
    media: {
      type: String,
      required: true,
    },
    attributes: {
      type: Object,
    },
  },
  computed: {
    srcSetString() {
      return generateSrcSetString(this.srcSet, this.deliveryAddress);
    },
  },
};
</script>