const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // Return your Object options:
    return {
      dir: {
        input: 'src',
        output: 'www',
      }
    }
};
