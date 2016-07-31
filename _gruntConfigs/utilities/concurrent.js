
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
        'sass',
        'babel:dist',
        'concat',
        'modernizr',
        'assemble'
      ],
      dist: [
        'babel',
        'sass',
        'assemble',
        'imagemin',
        'svgmin',
      ]
    },

};


