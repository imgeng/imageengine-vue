<template>
  <source :srcSet="srcSetString" :media="media" v-bind="attributes" />
</template>

<script>
import { generateSrcSetString } from "../utils/service";
export default {
  inject: ["deliveryAddress", "stripFromSrc"],
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
      return generateSrcSetString(
        this.stripFromSrc
          ? this.srcSet.map((image) => ({
              ...image,
              src: image.src.replace(this.stripFromSrc, ""),
            }))
          : this.srcSet,
        this.deliveryAddress
      );
    },
  },
};
</script>