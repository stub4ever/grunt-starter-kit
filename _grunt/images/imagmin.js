/*----------------------------------( IMAGEMIN )----------------------------------*/

/**
* Produce minified image files in the dist folder
*
* @see https://github.com/gruntjs/grunt-contrib-imagemin
*
*/


module.exports.tasks = {

    imagemin: {
        dist: {
            options: {
                progressive: true,
                // PNG only.
                optimizationLevel: 3,
            },
            files: [{
                // Enable dynamic expansion.
                expand: true,

                cwd: '<%=config.img.srcDir%>',
                src: ['{,*/}*.{gif,jpeg,jpg,png}', '!**/*.svg'],
                dest: '<%=config.img.distDir%>'
            }]
        }
    },

};
