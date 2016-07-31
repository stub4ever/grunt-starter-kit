/**
 * Global Grunt
 * Has all the Grunt tasks grouped into specific js files
 */

// Configurable paths
module.exports = {

    //PROJECT settings
    src : "./_gruntConfigs/**/*.js",

    /*----------------------------------( port vars )----------------------------------*/

    port : {
        host: 'localhost',  // <%=config.port.host%>
        dev: 8000,          // <%=config.port.dev%>
        dist: 9000,         // <%=config.port.dist%>
    },

    /*----------------------------------( Dir vars )----------------------------------*/

    srcDir  : 'app',    // <%=config.srcDir%>
    distDir : 'dist',   // <%=config.distDir%>
    tempDir : '.tmp',   // <%=config.tempDir%>


    /*----------------------------------( bower var )----------------------------------*/

    bower : {
        srcDir : 'bower_components'     // <%=config.bower.srcDir%>
    },


    /*----------------------------------( template var )----------------------------------*/

     tpl : {
        /*-- SOURCES FOLDERS ---------------------------------------------*/
        srcDir : '<%=config.srcDir%>/templates',  // <%=config.tpl.srcDir%>
    },


    /*----------------------------------( css vars )----------------------------------*/

    css : {
        /*-- SOURCES FOLDERS ---------------------------------------------*/
        srcDirSass  : '<%=config.srcDir%>/styles',              // <%=config.css.srcDirSass%>
        srcDirFonts  : '<%=config.css.srcDirSass%>/fonts',     // <%=config.css.srcDirFonts%>

        srcDevList : [  // <%=config.css.srcDevList%>
            '<%=config.css.tempDir%>/{,*/}*.css',
            '<%=config.css.srcDirSass%>/{,*/}*.css',
            // INSERT custom CSS files  ------------------/
        ],
        srcVendorList : [ // <%=config.css.srcVendorList%>
            // INSERT third party CSS files  ------------------/
        ],

        /*-- DIST FOLDERS ---------------------------------------------*/
        distDir  : '<%=config.distDir%>/styles',    // <%=config.css.distDir%>

        distDevFile : '<%=config.css.distDir%>/main.min.css',    // <%=config.css.distDevFile%>
        distVendorFile : '<%=config.css.distDir%>/vendor.min.css',    // <%=config.css.distVendorFile%>

        /*-- TEMP FOLDERS ---------------------------------------------*/
        tempDir  : '<%=config.tempDir%>/styles',          // <%=config.css.tempDir%>
        tempDirConcat : '<%=config.css.tempDir%>/concat', // <%=config.css.tempDirConcat%>

        tempDevConcatFile : 'main.css',         // <%=config.css.tempDevConcatFile%>
        tempVendorConcatFile : 'vendor.css',    // <%=config.css.tempVendorConcatFile%>
    },


    /*----------------------------------( js vars )----------------------------------*/

    js : {
        /*-- SOURCES FOLDERS ---------------------------------------------*/
        srcDir : '<%=config.srcDir%>/scripts',       // <%=config.js.srcDir%>
        srcFile : 'main.js',                         // <%=config.js.srcFile%>

        srcDevList : [                                     // <%=config.js.srcDevList%>
            '<%=config.js.tempDir%>/*.js',
            '<%=config.js.tempDir%>/app/*.js'
            // INSERT custom JS files  ------------------/
        ],
        srcVendorList : [                                  // <%=config.js.srcVendorList%>
            '<%=config.bower.srcDir%>/jquery/dist/jquery.js',
            // INSERT third party JS files  ------------------/
        ],
        srcPluginsList : [                                 // <%=config.js.srcPluginsList%>
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/button.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            '<%=config.bower.srcDir%>/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
            // INSERT plugin JS files  ------------------/
        ],

        /*-- DIST FOLDERS ---------------------------------------------*/
        distDir : '<%=config.distDir%>/scripts',            // <%=config.js.distDir%>

        distDevFile : '<%=config.js.distDir%>/main.min.js',    // <%=config.js.distDevFile%>
        distVendorFile : '<%=config.js.distDir%>/vendor.min.js',    // <%=config.js.distVendorFile%>
        distPluginsFile : '<%=config.js.distDir%>/plugins.min.js',    // <%=config.js.distPluginsFile%>

        /*-- TEMP FOLDERS ---------------------------------------------*/
        tempDir : '<%=config.tempDir%>/scripts',     // <%=config.js.tempDir%>
        tempDirConcat : '<%=config.js.tempDir%>/concat', // <%=config.js.tempDirConcat%>

        tempDevConcatFile : '<%=config.js.tempDirConcat%>/main.js',         // <%=config.js.tempDevConcatFile%>
        tempVendorConcatFile : '<%=config.js.tempDirConcat%>/vendor.js',    // <%=config.js.tempVendorConcatFile%>
        tempPluginsConcaFile : '<%=config.js.tempDirConcat%>/plugins.js',   // <%=config.js.tempPluginsConcaFile%>
    },


    /*----------------------------------( img vars )----------------------------------*/

    img : {
        srcDir : '<%=config.srcDir%>/images',           // <%=config.img.srcDir%>
        distDir : '<%=config.distDir%>/images',         // <%=config.img.distDir%>

    },

     /*----------------------------------( ico var )----------------------------------*/

    ico : {
        srcDir : '<%=config.srcDir%>/icons',           // <%=config.ico.srcDir%>
        distDir : '<%=config.distDir%>/icons',           // <%=config.ico.distDir%>
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

