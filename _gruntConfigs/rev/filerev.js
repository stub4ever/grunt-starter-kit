module.exports.tasks = {

   // 2) Update asset references (images, fonts, etc) with reved filenames in compiled css + js
   // Renames files for browser caching purposes
   filerev: {
      dist: {
         options: {
            algorithm: 'md5',
            length: 8
         },
         src: [
            '<%=config.js.distDir%>/{,*/}*.js',
            '<%=config.css.distDir%>/{,*/}*.css',
            '<%=config.img.distDir%>/{,*/}*.*',
            '<%=config.css.distDirFonts%>/{,*/}*.*',
            '<%=config.distDir%>/*.{ico,png}'
         ]
      }
   },

};


 // Renames files for browser caching purposes
    // filerev: {
    //   dist: {
    //     src: [
    //       '<%= config.dist %>/scripts/{,*/}*.js',
    //       '<%= config.dist %>/styles/{,*/}*.css',
    //       '<%= config.dist %>/images/{,*/}*.*',
    //       '<%= config.dist %>/styles/fonts/{,*/}*.*',
    //       '<%= config.dist %>/*.{ico,png}'
    //     ]
    //   }
    // },
