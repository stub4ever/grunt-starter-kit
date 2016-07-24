/*----------------------------------( POSTCSS )----------------------------------*/

/**
* Running browser Prefixer on your css dist file
* Apply several post-processors to your CSS
*
* @see https://github.com/nDmitry/grunt-postcss
*
*/

module.exports.tasks = {

    postcss: {
        options: {
            processors: [
                require('autoprefixer')({

                    /* Uncomment for supporting the last 2 browsers, any browsers with >5% market share,
                    // and ensuring we support IE8+ with prefixes */
                    // browsers: ['> 5%', 'last 2 versions', 'ie > 7'],

                    browsers: ['last 10 versions', 'ie >= 10']
                }),
                // require('cssnext')(),
                // require('precss')()
            ]
        },
        dist: {
            src: '<%=config.css.tempDir%>/*.css'
        }
    },

};
