Ext.define('Frontend.controller.Dashboard', {
    extend: 'Ext.app.Controller',
    views: [
        'dashboard.Panel','dashboard.Tree','dashboard.Tab'
    ],
    stores: [
        'TreeStore'
    ],
    refs: [
        {
            ref: 'tabpanel',
            selector: 'dashboardtab'
        }
    ],
    init: function() {
        this.control({
            'dashboardtree': {
                itemclick: this.treeNodeClick
            }
        })
    },

    treeNodeClick:function( treeNode, record, item, index, e, eOpts ) {
        var tabpanel=this.getTabpanel();
        console.log(record.raw.id);
        var tab = tabpanel.getComponent(record.raw.id);
        console.log(tab);
        if(tab==null){
            this.createTab(tabpanel,record);
        }else {
             this.ativeTab(tabpanel,tab);
        }

    },
    ativeTab:function(tabpanel,tab){
        tabpanel.setActiveTab(tab);
    },
    createTab:function(tabpanel,record){
        tabpanel.add({
            id:record.raw.id
            ,title:record.raw.text
            ,closable:true
        })
    }
});

