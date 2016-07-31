/*----------------------------------( CMQ )----------------------------------*/

/**
// Combine matching media queries into one media query definition.
*
* @see https://github.com/buildingblocks/grunt-combine-media-queries
*
*/

module.exports.tasks = {

    cmq: {
        options: {
            log: false
        },
        styles: {
            files: {
                '<%=config.css.distDevFile%>': [ '<%=config.css.distDevFile%>' ]
            }
        },
        vendor: {
            files: {
                '<%=config.css.distVendorFile%>': [ '<%=config.css.distVendorFile%>' ]
            }
        }
    },

};
