module.exports.tasks = {


   // 1) Add md5 hashes to assets referenced files

   // Reads HTML for usemin blocks to enable smart builds that automatically
   // concat, minify and revision files. Creates configurations in memory so
   // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%=config.distDir%>'
      },
      html: '<%=config.srcDir%>/index.html'
    },
};


    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    // useminPrepare: {
    //   options: {
    //     dest: '<%= config.dist %>'
    //   },
    //   html: '<%= config.app %>/index.html'
    // },
