/*----------------------------------( UNCSS )----------------------------------*/

/**
* Remove unused CSS across multiple files, compressing the final output
*
* @see https://github.com/addyosmani/grunt-uncss
*
*/


module.exports.tasks = {
    // https://github.com/addyosmani/grunt-uncss/issues/75
    // http://stackoverflow.com/questions/24335167/configuring-grunt-uncss-with-yeomans-generator-webapp
    uncss: {
        styles: {
            options: {
                ignoreSheets: [/fonts.googleapis/],
                urls: [], //Overwritten in load_sitemap_and_uncss task
                ignore: ['/js-.+/'],
                stylesheets: ["<%=config.css.tempDevConcatFile%>"],
                csspath: "/styles/concat/",
                htmlroot: '<%=config.tempDir%>',
            },
            files: [
                {
                src: [
                    '<%=config.tempDir%>/index.html',
                    '<%=config.tempDir%>/{,*/}*.html',
                    ],
                dest: '<%=config.css.tempDirConcat%>/<%=config.css.tempDevConcatFile%>'
                }
            ]
        },
        vendor: {
            options: {
                ignoreSheets: [/fonts.googleapis/],
                urls: [], //Overwritten in load_sitemap_and_uncss task
                ignore: ['/js-.+/'],
                stylesheets: ["<%=config.css.tempVendorConcatFile%>"],
                csspath: "/styles/concat/",
                htmlroot: '<%=config.tempDir%>',
            },
            files: [
                {
                src: [
                    '<%=config.tempDir%>/index.html',
                    '<%=config.tempDir%>/{,*/}*.html',
                    ],
                dest: '<%=config.css.tempDirConcat%>/<%=config.css.tempVendorConcatFile%>'
                }
            ]
        },

        // Optionally, add more generated files here ...
    }

};
