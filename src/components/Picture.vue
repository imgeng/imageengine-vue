<template>
  <picture>
    <SourceComponent :srcSet="sources" :media="sourcesMedia" />
    <ImageComponent :src="defaultImageSrc" />
  </picture>
</template>

<script>
import Source from "./Source";
import Image from "./Image";

export default {
  components: { SourceComponent: Source, ImageComponent: Image },
  inject: ["deliveryAddress"],
  props: {
    sources: {
      type: Array,
      required: true,
    },
    sourcesMedia: {
      type: String,
      required: true,
    },
    defaultImageSrc: {
      type: String,
      required: true,
    },
  },
  created() {
    console.log(`Injected property picture: ${this.deliveryAddress}`);
  },
};
</script>