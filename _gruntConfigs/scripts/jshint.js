/*----------------------------------( JSHINT )----------------------------------*/

/**
* Validate files with JSHint.
*
* @see https://github.com/gruntjs/grunt-contrib-jshint
* @see http://www.jshint.com/docs/
*/


module.exports.tasks = {


    sasslint: {
        options: {
            configFile: '.sass-lint.yml',
            outputFile: 'report.xml'

        },
        target: ['<%=config.css.srcDirSass%>/*.scss']
    }

};
