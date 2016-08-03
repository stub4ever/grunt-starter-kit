/*----------------------------------( SVGMIN )----------------------------------*/

/**
* Minimizes SVG files
* removes unneeded craft from an SVG
* @see https://github.com/sindresorhus/grunt-svgmin
*
*/


module.exports.tasks = {

    svgmin: {
        options: {
            plugins: [
                // don't remove the viewbox atribute from the SVG
                { removeViewBox: false },

                // don't remove Empty Attributes from the SVG
                { removeEmptyAttrs: false },

                { removeUselessStrokeAndFill: false },
            ]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%=config.ico.srcDirSvg%>',
                src: '{,*/}*.svg',
                dest: '<%=config.ico.distDirSvg%>',
                ext: '.svg'
            }]
        }
    },

};
