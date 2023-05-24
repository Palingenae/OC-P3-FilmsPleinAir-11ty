const path = require("path");
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "fr",
    });

    eleventyConfig.addPassthroughCopy("src/assets/");
    
    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "public"
        }
    }
}