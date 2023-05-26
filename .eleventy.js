const HtmlMinifier = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');

module.exports = function (eleventyConfig) {

    // eleventyConfig.setTemplateFormats(['md']);
    eleventyConfig.addPlugin(ErrorOverlay);
    eleventyConfig.addTransform('htmlminifier', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            let minified = HtmlMinifier.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        return content;
    })

    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addPassthroughCopy("src/assets/");
    
    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "public"
        },
        jsDataFileSuffix: '.data',
    }
}