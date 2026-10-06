module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/**/img");
    eleventyConfig.addPassthroughCopy("src/shared");
    eleventyConfig.addWatchTarget("src/shared/styles.css");

    return {
        dir: {
            input: "src",
            output: "",
        },
    };
};