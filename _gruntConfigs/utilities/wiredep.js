module.exports.tasks = {


    // Automatically inject Bower components into the HTML file
    wiredep: {
      app: {
        src: ['<%=config.srcDir%>/index.html'],
        exclude: ['bootstrap.js'],
        ignorePath: /^(\.\.\/)*\.\./
      },
      sass: {
        src: ['<%=config.css.srcDirSass%>/{,*/}*.{scss,sass}'],
        ignorePath: /^(\.\.\/)+/
      }
    },
};


