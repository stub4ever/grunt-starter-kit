/*----------------------------------( BROWSERSYNC )----------------------------------*/

/**
* Live reload & Browser Syncing
*
* @see https://www.npmjs.com/package/grunt-browser-sync
*
*/


module.exports.tasks = {

   // //Livereload and sync files for changes
    browserSync: {
        options: {
            // open: false,
            notify: false,
            background: true,
            watchOptions: {
                ignored: ''
            }
        },
        livereload: {
            options: {
                files: [
                    '<%=config.tempDir%>/{,*/}*.html',
                    '<%=config.css.tempDir%>/{,*/}*.css',
                    '<%=config.img.srcDir%>/{,*/}*',
                    '<%=config.js.tempDir%>/{,*/}*.js'
                ],
                host: '<%=config.port.host%>',
                port: '<%=config.port.dev%>',
                server: {
                    baseDir: ['<%=config.tempDir%>', '<%=config.srcDir%>'],
                    routes: {
                        '/bower_components': './bower_components',
                    }
                }
            }
        },
        dist: {
            options: {
                host: '<%=config.port.host%>',
                port: '<%=config.port.dist%>',
                background: false,
                server: '<%=config.distDir%>'
            }
        }
    },

};
