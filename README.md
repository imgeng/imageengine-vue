# Vue components for ImageEngine integration

Hassle-free way to deliver optimized responsive images in your Vue applications.

## Quick start

The bundle includes three major components:

* `<ImageEngineProvider>`
* `<Image>`
* `<Source>`

The only prerequisite to start using them is placing `ImageEngineProvider` somewhere above in the DOM tree with the `deliveryAddress` prop set to your [ImageEngine Delivery Address](https://support.imageengine.io/hc/en-us/articles/360059238371-Quick-Start) :

```vue
 <template>
  <div class="content">
    <ImageEngineProvider deliveryAddress="https://blazing-fast-pics.cdn.imgeng.in">
      <picture>
        <SourceComponent
          :srcSet="[
            {
              src: `/images/pic_1_variation_1.jpg`,
              width: '500w',
            },
            {
              src: `/images/pic_1_variation_2.jpg`,
              width: '900w',
              directives: { compression: 0 },
            },
          ]"
          :attributes="{ media: '(max-width: 950px)' }"/>
        <SourceComponent
          :srcSet="[
            {
              src: `/images/pic_1_variation_1.jpg`,
              width: '500w',
            },
            {
              src: `/images/pic_1_variation_2.jpg`,
              width: '900w',
              directives: { compression: 0 },
            },
          ]"
          :attributes="{
            media: '(max-width: 950px)',
            id: 'testid',
            'data-test': 'test source attribute',
          }"/>
        <ImageComponent
          src="/images/pic_2.jpg"
          :attributes="{
            alt: 'test image',
          }"
          :directives="{
              outputFormat: 'webp',
              rotate: 45,
              inline: true
          }"/>
      </picture>
    </ImageEngineProvider>
  </div>
</template>

<script>
import {Image, Source, ImageEngineProvider} from "@imageengine/vue";

export default {
  components: {
    ImageComponent: Image,
    SourceComponent: Source,
    ImageEngineProvider,
  },
};
</script>

```

```vue
 <template>
  <div id="app">
    <ImageEngineProvider deliveryAddress="https://blazing-fast-pics.cdn.imgeng.in">
        <ImageComponent src="/images/pic_2.jpg" />
    </ImageEngineProvider>
  </div>
</template>

<script>
import {Image, ImageEngineProvider} from "@imageengine/vue";

export default {
  components: {
    ImageComponent: Image,
    ImageEngineProvider
  },
};
</script>
```

[Demo app on CodeSandbox](https://codesandbox.io/s/charming-yonath-9j1cb)

## Component props reference

### ImageEngineProvider
`deliveryAddress` - [ImageEngine Delivery Address](https://support.imageengine.io/hc/en-us/articles/360059238371-Quick-Start):

```ts
deliveryAddress: string
```

`stripFromSrc` - Strip away a portion of a source string in all ImageEngine's components. Particularly useful if your images are coming from a headless CMS and you need to erase something in received URL path (origin, for example):

```ts
stripFromSrc?: string
```


### Image
`src` - Relative path to the image:

```ts
src: string
```

`directives` - ImageEngine directives:

```ts
directives?: {
  // Define desired width.
  width?: number
  // Set width to auto (with fallback).
  autoWidthWithFallback?: number
  // Define desired height.
  height?: number
  // Adjust compression.
  // Possible range: 0-100.
  compression?: number
  // Define desired output format.
  outputFormat?:
    | "png"
    | "gif"
    | "jpg"
    | "bmp"
    | "webp"
    | "jp2"
    | "svg"
    | "mp4"
    | "jxr"
  // Define desired fit method.
  fitMethod?: "stretch" | "box" | "letterbox" | "cropbox"
  // Don't apply any optimizations to the origin image.
  noOptimization?: true
  // Adjust sharpness.
  // Possible range: 0-100.
  sharpness?: number
  // Define rotation.
  // Possible range: -360 to 360.
  rotate?: number
  // Use WURFL to calculate screen's width and then scale the image accordingly.
  // Possible range: 0-100 (float).
  scaleToScreenWidth?: number
  // Crop the image [width, height, left, top].
  crop?: number[]
  // Convert the image into a data url.
  inline?: true
  // Keep EXIF data.
  keepMeta?: true
}
```

`srcSet` - List of image variations for the image source set:

```ts
srcSet?: [{
  // Relative path to the image.
  src: string
  // Width descriptor.
  width: string
  // Custom optimization instructions.
  directives?: TDirectives
}]
```

`attributes` - List of additional attributes:

```ts
attributes?: [{
  // regular attribute
  alt: string
  // ...
}]
```


### Source
`srcSet` - List of image variations for the image source set:

```ts
srcSet?: [{
  // Relative path to the image.
  src: string
  // Width descriptor.
  width: string
  directives?: TDirectives
}]
```

`attributes` - List of additional attributes:

```ts
attributes?: [{
  // regular attribute, ex. media: '(max-width: 950px)',
  // ...
}]
```
