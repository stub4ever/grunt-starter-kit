/*----------------------------------( UGLIFY )----------------------------------*/

/**
* Run Modern JavaScript compiler
*
* @see https://github.com/babel/grunt-babel
*
*/

module.exports.tasks = {

    uglify: {
        options: {
            banner: '<%=config.banners.short%>',
            compress: true,
            mangle: false,
            preserveComments: 'some',
            // sourceMap: true,
            report: ['gzip', 'min']
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%=config.js.distDir%>',
                src: ['*.js', '!*.min.js'],
                dest: '<%=config.js.distDir%>',
                ext: '.min.js'
            }]
        },
    },


};
