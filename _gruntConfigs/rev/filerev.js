 /*----------------------------------( FILEREV )----------------------------------*/

/**
* 2) Update asset references (images, fonts, etc) with reved filenames in compiled css + js,
* Renames files for better browser caching purposes
*
* @see https://github.com/yeoman/grunt-filerev
*
*/

module.exports.tasks = {

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
            '<%=config.distDir%>/<%=config.css.distDirFonts%>/{,*/}*.*',
            '<%=config.distDir%>/*.{ico,png}'
         ]
      }
   },

};



