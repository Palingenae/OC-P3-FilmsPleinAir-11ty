const path = require("path");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const sass = require("sass");

module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "fr",
    });

    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);

            if (parsed.name.startsWith('_')) {
                return;
            }
            
            let result = sass.compileString(inputContent, {
                loadPaths: [parsed.dir || "."],
                sourceMap: true,
            })

            this.addDependencies(inputPath, result.loadedUrls);

            return async () => {
                return result.css;
            }
        }

    })

    eleventyConfig.addPassthroughCopy("src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("src/assets/styles/css.json")
    
    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "public"
        }
    }
}