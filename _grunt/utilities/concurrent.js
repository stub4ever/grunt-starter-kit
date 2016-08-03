
/*----------------------------------( CONCURRENT )----------------------------------*/

/**
* Run some tasks in parallel to speed up build process
*
* @see https://github.com/sindresorhus/grunt-concurrent
*
*/


module.exports.tasks = {

    concurrent: {
        server: [
            'grunticon',
            'sass',
            'babel:dist',
            'concat',
            'modernizr',
            'assemble',
        ],
        src: [
            'grunticon',
        ],
        temp: [
            'babel',
            'sass',
            'assemble',
        ],
        dist: [
            'imagemin',
            'svgmin',
            'copy',
        ]
    },

};


