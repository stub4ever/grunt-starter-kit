/**
 * Grunt tasks:
 * - grunt                   : The default task. Alias for `grunt serve` task below
 * - grunt serve             : watch files and run a static server
 * - grunt css:check         : check css style for violations
 * - grunt js:check          : check js style for violations
 * - grunt dist              : Run a optimized static production server
 * - grunt production        : Run concat & optimized css, js, svg, images files for production
 */

module.exports = function (grunt) {
    'use strict';

    var options = {
        pkg: require('./package'), // <%=pkg.name%>

        // Global Grunt vars. Edit files
        config : require('./_grunt/config.js'),
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

     // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        cmq: 'grunt-combine-media-queries',
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

    grunt.registerTask('css:check', [
        'clean:css_server',
        'sass',
        'concat:css_dev',
        'concat:css_vendor',
        'postcss',
        'assemble',
        'cmq',
        'uncss',
        'csslint'
    ]);

    grunt.registerTask('js:check', [
        'clean:js_server',
        'babel',
        'concat:js_dev',
        'jscs',
        'jshint',
    ]);

    grunt.registerTask('dist', [
        'production',
        'browserSync:dist',
    ]);

    grunt.registerTask('production', [
        'clean:dist',
        'concurrent:src',
        'concurrent:temp',
        'useminPrepare',
        'postcss',
        'concat',
        'cmq',
        'uncss',
        'modernizr',
        'concurrent:dist',
        'cssmin',
        'uglify',
        'filerev',
        'processhtml',
        'usemin',
        'htmlmin',
        'notify:release',
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);
};
