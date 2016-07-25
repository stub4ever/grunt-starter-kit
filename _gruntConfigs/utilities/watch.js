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
        html: {
            files: ['<%=config.srcDir%>/{,*/}*.html'],
        },
        gruntfile: {
            files: ['_gruntConfigs/{,*/}*.js'],
            tasks: ['concat', 'notify:config'],
        },
        sass: {
            files: ['<%=config.css.srcDirSass%>/{,*/}*.{scss,sass}'],
            tasks: ['sass', 'notify:styles']
        },
        babel: {
            files: ['<%=config.js.srcDir%>/**/**/**/*.js'],
            tasks: ['babel:dist', 'notify:scripts']
        },
        styles: {
            files: ['<%=config.css.srcDirSass%>/{,*/}*.css'],
            tasks: ['newer:copy:styles', 'sass', 'notify:styles']
        }
    },
};

