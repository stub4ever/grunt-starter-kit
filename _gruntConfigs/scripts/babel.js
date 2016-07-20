module.exports.tasks = {


   // Compiles ES6 with Babel
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%=config.js.srcDir%>',
          src: '{,*/}*.js',
          dest: '<%=config.js.tempDir%>',
          ext: '.js'
        }]
      }
    },
};
