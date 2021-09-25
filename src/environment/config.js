const constants = {
    DIRECTIVE_MAPPING: {
        width: "w",
        autoWidthWithFallback: "w_auto",
        height: "h",
        compression: "cmpr",
        outputFormat: "f",
        fitMethod: "m",
        noOptimization: "pass",
        sharpness: "s",
        rotate: "r",
        scaleToScreenWidth: "pc",
        crop: "cr",
        inline: "in",
        keepMeta: "meta",
    },
    ALLOWED_INPUT_EXTENSIONS: [
        "png",
        "gif",
        "jpg",
        "jpeg",
        "bmp",
        "webp",
        "jp2",
        "svg",
        "tif",
    ]
};

Object.freeze(constants);

export default constants;
