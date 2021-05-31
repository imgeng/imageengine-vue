<template>
  <img
    :src="directives ? srcString : imageUrl"
    :srcSet="srcSet ? srcSetString : false"
    v-bind="attributes"
  />
</template>

<script>
import constants from "../environment/config";
import { constructUrl, generateSrcSetString } from "../utils/service";
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    directives: {
      type: Object,
    },
    srcSet: {
      type: Object,
    },
    attributes: {
      type: Object,
    },
  },
  inject: ["deliveryAddress"],
  computed: {
    srcString() {
      return constructUrl(this.imageUrl, this.directives);
    },
    srcSetString() {
      return generateSrcSetString(this.srcSet, this.deliveryAddress);
    },
    imageUrl() {
      return this.deliveryAddress + this.src;
    },
    imageExtension() {
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