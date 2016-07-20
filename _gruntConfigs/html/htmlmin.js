module.exports.tasks = {

    htmlmin: {
        dist: {
            options: {
                // collapseBooleanAttributes: true,
                // collapseWhitespace: true,
                // conservativeCollapse: true,
                // removeAttributeQuotes: true,
                // removeCommentsFromCDATA: true,
                // removeEmptyAttributes: true,
                // removeOptionalTags: true,

                // // true would impact styles with attribute selectors
                // removeRedundantAttributes: false,
                // useShortDoctype: true
            },
            files: [{
                expand: true,
                cwd: '<%=config.distDir%>',
                src: '{,*/}*.html',
                dest: '<%=config.distDir%>'
            }]
        }
    },
};
