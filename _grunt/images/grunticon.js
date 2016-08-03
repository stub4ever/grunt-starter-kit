/*----------------------------------( IMAGEMIN )----------------------------------*/

/**
* Produce minified image files in the dist folder
*
* @see https://github.com/gruntjs/grunt-contrib-imagemin
*
*/

module.exports.tasks = {

    grunticon: {
        files: {
            expand: true,
            cwd: '<%=config.ico.srcDirSvg%>/', // source
            src: ['**/*.svg'], // source extension(s)
            dest: '<%=config.css.srcDirGrunticon%>', // destination
        },

        options: {
            optimizationLevel: 3,
            progressive : true,
            svgoPlugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false },
                { removeTitle: true },
                { removeXMLProcInst: false },
            ],
            pngfolder: '../../icons',
            pngpath: '<%=config.ico.srcDir%>',
            datasvgcss: '_grunticon.data-svg.scss',
            datapngcss: '_grunticon.data-png.scss',
            urlpngcss: '_grunticon.fallback-png.scss',
            previewhtml: 'preview.html',
            loadersnippet: 'grunticon.loader.js',
            // previewTemplate: '',
        },
    },
};
