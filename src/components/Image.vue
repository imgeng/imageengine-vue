<template>
  <img
    :src="directives ? srcString : imageUrl"
    :srcSet="srcSet ? srcSetString : false"
    v-bind="attributes"
  />
</template>

<script lang="ts">
import constants from "../environment/config";
import { constructUrl, generateSrcSetString } from "../utils/service";
import { TDirectives, TSrcSet } from "../environment/types";
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    directives: {
      type: Object as () => TDirectives,
    },
    srcSet: {
      type: Array as () => TSrcSet,
    },
    attributes: {
      type: Object,
    },
  },
  inject: ["deliveryAddress", "stripFromSrc"],
  computed: {
    srcString(): String {
      return constructUrl(this.imageUrl, this.directives);
    },
    srcSetString(): String {
      return generateSrcSetString(this.srcSet, this.deliveryAddress);
    },
    imageUrl(): String {
      return (
        this.deliveryAddress +
        (this.stripFromSrc ? this.src.replace(this.stripFromSrc, "") : this.src)
      );
    },
    imageExtension(): String {
      const ieSplit = this.src.split(".").slice(-1);
      return ieSplit.length > 0 ? ieSplit[ieSplit.length - 1] : "";
    },
  },
  created() {
    if (!constants.ALLOWED_INPUT_EXTENSIONS.includes(this.imageExtension)) {
      console.warn(
        `The following image's extension doesn't match any of the allowed types and won't be optimized: ${this.src}.`,
        `List of supported extensions: ${constants.ALLOWED_INPUT_EXTENSIONS.join(
          ", "
        )}.`
      );
    }
  },
};
</script>