<template>
  <source :srcSet="srcSetString" v-bind="attributes" />
</template>

<script lang="ts">
import { TSrcSet } from "../environment/types";
import { generateSrcSetString } from "../utils/service";
export default {
  inject: ["deliveryAddress", "stripFromSrc"],
  props: {
    srcSet: {
      type: Array as () => TSrcSet,
      required: true,
    },
    attributes: {
      type: Object,
    },
  },
  computed: {
    srcSetString(): String {
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