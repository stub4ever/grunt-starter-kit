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
                stylesheets: ["main.css"],
                csspath: "/styles/",
                htmlroot: '<%=config.distDir%>',
            },
            files: [
                {
                src: [
                    '<%=config.distDir%>/index.html',
                    '<%=config.distDir%>/{,*/}*.html',
                    ],
                dest: '<%=config.css.distDevFile%>'
                }
            ]
        },
        vendor: {
            options: {
                ignoreSheets: [/fonts.googleapis/],
                urls: [], //Overwritten in load_sitemap_and_uncss task
                ignore: ['/js-.+/'],
                ignore: [''],
                stylesheets: ["vendor.css"],
                csspath: "/styles/",
                htmlroot: '<%=config.distDir%>',
            },
            files: [
                {
                src: [
                    '<%=config.distDir%>/index.html',
                    '<%=config.distDir%>/{,*/}*.html',
                    ],
                dest: '<%=config.css.distVendorFile%>'
                }
            ]
        },
        // Optionally, add more generated files here ...
    }

};
