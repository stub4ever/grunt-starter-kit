/**
 * Grunt tasks:
 * - grunt                   : The default task. Alias for `grunt serve` task below
 * - grunt serve             : watch files and run a static server
 * - grunt build             : Concat & optimized css, js, svg, images files for production
 */

module.exports = function (grunt) {
    'use strict';

    var options = {
        pkg: require('./package'), // <%=pkg.name%>

        // Global Grunt vars. Edit files
        config : require('./_gruntConfigs/config.js')
    };

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ["grunt-*"]});

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);


    /*=====================================( TASKS )=====================================*/

    grunt.registerTask('serve', 'start the server and preview your app', function (target) {

        if (target === 'dist') {
            return grunt.task.run(['build', 'browserSync:dist']);
        }

        grunt.task.run([
            'clean:server',
            'modernizr',
            'wiredep',
            'concurrent:server',
            'browserSync:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'modernizr',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);
};
