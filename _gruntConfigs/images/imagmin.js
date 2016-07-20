module.exports.tasks = {


  // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%=config.img.srcDir%>',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%=config.img.distDir%>'
        }]
      }
    },

};
