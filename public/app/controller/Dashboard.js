Ext.define('Frontend.controller.Dashboard', {
    extend: 'Ext.app.Controller',
    views: [
        'dashboard.Panel','dashboard.Tree'
    ],
    stores: [
        'TreeStore'
    ],

    init: function() {


        this.control({
            'dashboardtree': {
                itemclick: this.treeNodeClick
            }
        })
    },

    treeNodeClick:function( treeNode, record, item, index, e, eOpts ) {
      console.log("treeNode click");
      console.log(treeNode);
    }
});
