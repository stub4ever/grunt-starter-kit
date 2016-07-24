/**
 * Grunt tasks:
 * - grunt                   : The default task. Alias for `grunt serve` task below
 * - grunt serve             : watch files and run a static server
 * - grunt build             : Concat & optimized css, js, svg, images files for production
 * - grunt dist              : Run a optimized static production server
 */

module.exports = function (grunt) {
    'use strict';

    var options = {
        pkg: require('./package'), // <%=pkg.name%>

        // Global Grunt vars. Edit files
        config : require('./_gruntConfigs/config.js')
    };


    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

     // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);


    /*=====================================( TASKS )=====================================*/

    // Start the server and preview your app
    grunt.registerTask('serve',  [
        'clean:server',
        'concurrent:server',
        'browserSync:livereload',
        'notify:server',
        'watch',
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'postcss',
        'concat',
        'modernizr',
        'copy',
        'uncss',
        'cssmin',
        'uglify',
        'processhtml',
        'htmlmin',
        'notify:release',
    ]);

    grunt.registerTask('dist', [
        'build',
        'browserSync:dist',
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);
};
