module.exports.tasks = {


   // //Livereload and sync files for changes
    browserSync: {
      options: {
        notify: false,
        background: true,
        watchOptions: {
          ignored: ''
        }
      },
      livereload: {
        options: {
          files: [
            '<%=config.srcDir%>/{,*/}*.html',
            '<%=config.css.tempDir%>/{,*/}*.css',
            '<%=config.img.srcDir%>/{,*/}*',
            '<%=config.js.tempDir%>/{,*/}*.js'
          ],
          port: 9000,
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
          background: false,
          server: '<%=config.distDir%>'
        }
      }
    },
};


    //Livereload and sync files for changes
    // browserSync: {
    //   options: {
    //     notify: false,
    //     background: true,
    //     watchOptions: {
    //       ignored: ''
    //     }
    //   },
    //   livereload: {
    //     options: {
    //       files: [
    //         '<%= config.app %>/{,*/}*.html',
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= config.app %>/images/{,*/}*',
    //         '.tmp/scripts/{,*/}*.js'
    //       ],
    //       port: 9000,
    //       server: {
    //         baseDir: ['.tmp', config.app],
    //         routes: {
    //           '/bower_components': './bower_components'
    //         }
    //       }
    //     }
    //   },
    //   dist: {
    //     options: {
    //       background: false,
    //       server: '<%= config.dist %>'
    //     }
    //   }
    // },
