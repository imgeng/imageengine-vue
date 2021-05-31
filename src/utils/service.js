import constants from "../environment/config";

function constructUrl(src, directives) {
  const params = Object.entries(directives)
    // Filter out null, undefined and empty string values.
    .filter(([, value]) => value === 0 ? true : Boolean(value))
    .reduce((result, [key, value]) => {
      if (constants.DIRECTIVE_MAPPING[key]) {
        return result + `/${constants.DIRECTIVE_MAPPING[key]}_${value}`
      }

      console.warn(
        `Directive '${key}' isn't recognized and won't be applied to the image.`
      )
      return result
    }, "")

  return params === ""
    ? src
    : `${src}?imgeng=${params}`
}

function generateSrcSetString(srcSet, deliveryAddress) {
  return srcSet.reduce((result, { src, width, directives }) => {
    // Extract width directive and always apply it to the image as
    // its size has to match provided width descriptor.
    const widthDirective = {
      width: Number(width.replace("w", "")),
    }
    const fullImageUrl = constructUrl(
      deliveryAddress + src,
      directives
        ? {
            ...directives,
            ...widthDirective,
          }
        : widthDirective
    )
    const entry = `${fullImageUrl} ${width},\n`
    return result += entry
  }, "")
}

export {constructUrl, generateSrcSetString}