/*----------------------------------( WATCH )----------------------------------*/

/**
* Run predefined tasks whenever watched file patterns are added, changed
* or deleted.
*
* @see https://github.com/gruntjs/grunt-contrib-watch
*/


module.exports.tasks = {

    watch: {
        options: {
            // terminate current process and spawn a new one upon later changes
            interrupt: true,
        },
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep']
        },
        gruntfile: {
            files: ['Gruntfile.js', '_gruntConfigs/{,*/}*.js']
        },
        sass: {
            files: ['<%=config.css.scssDir%>/{,*/}*.{scss,sass}'],
            tasks: ['sass']
        },
        babel: {
            files: ['<%=config.js.srcDir%>/{,*/}*.js'],
            tasks: ['babel:dist']
        },
        styles: {
            files: ['<%=config.css.scssDir%>/{,*/}*.css'],
            tasks: ['newer:copy:styles', 'sass']
        }
    },
};

