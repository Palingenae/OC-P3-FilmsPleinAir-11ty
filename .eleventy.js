const HtmlMinifier = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const util = require('util');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(ErrorOverlay);
    eleventyConfig.addTransform('htmlminifier', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            let minified = HtmlMinifier.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: false
            });
            return minified;
        }
        return content;
    })

    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addPassthroughCopy("src/assets/");

    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj);
      });

    eleventyConfig.addGlobalData("scheduledMovies", async function(getAllMovies) {
        console.log(getAllMovies);

        return await getAllMovies;
    })
    
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