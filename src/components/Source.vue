<template>
  <source :srcSet="srcSetString" :media="media" />
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
  },
  computed: {
    srcSetString() {
      return generateSrcSetString(this.srcSet, this.deliveryAddress);
    },
  },
};
</script>