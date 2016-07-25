/*----------------------------------( SASS )----------------------------------*/

/**
* Compiles Sass to CSS and generates necessary files if requested
*
* @see https://github.com/gruntjs/grunt-contrib-sass
* @see http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style
*/


module.exports.tasks = {


    sass: {
        options: {
            expand: true,
            style: 'expanded', // Output style. Can be nested, compact, compressed, expanded.
            sourceMap: true,
            sourceMapEmbed: true,
            sourceMapContents: true,
            includePaths: require('node-bourbon').includePaths
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%=config.css.srcDirSass%>',
                src: ['*.{scss,sass}'],
                dest: '<%=config.css.tempDir%>',
                ext: '.css'
            }]
        }
    },
};
