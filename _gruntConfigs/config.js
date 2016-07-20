/**
 * Global Grunt
 * Has all the Grunt tasks grouped into specific js files
 */

// Configurable paths
module.exports = {

    //PROJECT settings
    src : "./_gruntConfigs/**/*.js",

    srcDir  : 'app',    // <%=config.srcDir%>
    distDir : 'dist',   // <%=config.distDir%>
    tempDir : '.tmp',   // <%=config.tempDir%>

    bower : {
        srcDir : 'bower_components'     // <%=config.bower.srcDir%>
    },


    /*----------------------------------( css vars )----------------------------------*/

    css : {
        /*-- SOURCES FOLDERS ---------------------------------------------*/
        scssDir  : '<%=config.srcDir%>/styles',              // <%=config.css.scssDir%>

        /*-- DIST FOLDERS ---------------------------------------------*/
        distDir  : '<%=config.distDir%>/styles',             // <%=config.css.distDir%>

        distDirFonts  : '<%=config.css.distDir%>/fonts',    // <%=config.css.distDirFonts%>

        /*-- TEMP FOLDERS ---------------------------------------------*/
        tempDir  : '<%=config.tempDir%>/styles',           // <%=config.css.tempDir%>


        // We are supporting the last 2 browsers, any browsers with >5% market share,
        // and ensuring we support IE8+ with prefixes
        autoprefixer : ['> 5%', 'last 2 versions', 'ie > 7'] // <%=config.css.autoprefixer%>
    },


    /*----------------------------------( js vars )----------------------------------*/

    js : {
        srcDir : '<%=config.srcDir%>/scripts',       // <%=config.js.srcDir%>
        srcFile : 'main.js',                         // <%=config.js.srcFile%>
        distDir : '<%=config.distDir%>/scripts',     // <%=config.js.distDir%>
        distFile : '<%=config.js.distDir%>/main.js', // <%=config.js.distFile%>

        tempDir : '<%=config.tempDir%>/scripts',     // <%=config.js.tempDir%>
    },


    /*----------------------------------( img vars )----------------------------------*/

    img : {
        srcDir : '<%=config.srcDir%>/images',           // <%=config.img.srcDir%>
        distDir : '<%=config.distDir%>/images',         // <%=config.img.distDir%>

        grunticonDir : '<%=config.srcDir%>/grunticon'   // <%=config.img.grunticonDir%>
    },


    /*----------------------------------( banner vars )----------------------------------*/
    // * Short and long banners.
    // @see http://gruntjs.com/getting-started#an-example-gruntfile

    banners : {

        'short' : '/*! ' +       // <%=config.banner.short%>
            '<%= pkg.title || pkg.name %>' +
            '<%= pkg.version ? " v" + pkg.version : "" %>' +
            '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
            '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
            ' */',

        'long' : '/**\n' +       // <%=config.banner.long%>
            ' * <%= pkg.title || pkg.name %>\n' +
            '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
            ' *\n' +
            '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
            '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
            '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
            ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
            '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
            '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
            ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
            ' */\n\n'
    },

};

