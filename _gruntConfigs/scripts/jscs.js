/*----------------------------------( JSCS)----------------------------------*/

/**
* Task for checking JavaScript Code Style
*
* @see https://github.com/jscs-dev/grunt-jscs
*
*/

module.exports.tasks = {

    // Make sure code styles are up to par and there are no obvious mistakes
    jscs: {
        base: {
            src: [
                '<%=config.js.tempDevConcatFile%>'
            ]
        },
        options: {
            // esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
            config: '.jscsrc',
            excludeFiles: [
                '!<%=config.js.tempVendorConcatFile%>',
                '!<%=config.js.tempPluginsConcaFile%>'
            ]
        }
    },

};
