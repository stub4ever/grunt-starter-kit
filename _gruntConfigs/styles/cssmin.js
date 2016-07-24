/*----------------------------------( CSSMIN )----------------------------------*/

/**
* Minify + gzip css files
*
* @see https://github.com/gruntjs/grunt-contrib-cssmin
*
*/

module.exports.tasks = {


    cssmin: {
        dev_css: {
            options: {
                keepSpecialComments: 0, // remove all comments
                report: 'gzip',
                // sourceMap: true
            },
            files: [{
                expand: true,
                cwd: '<%=config.css.distDir%>',
                src: ['*.css', '!*.min.css'],
                dest: '<%=config.css.distDir%>',
                ext: '.min.css'
            }]
        },
        // third_party_css: {
        //     options: {
        //         report: 'gzip',
        //         // sourceMap: true
        //     },
        //     files: [{
        //         expand: true,
        //         cwd: '<%= project.src_assets_css_third_party %>',
        //         src: ['*.css', '!*.min.css'],
        //         dest: '<%= project.src_assets_css_third_party %>',
        //         ext: '.min.css'
        //     }]
        // }
    },

};
