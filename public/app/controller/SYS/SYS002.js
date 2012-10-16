Ext.define('Frontend.controller.SYS.SYS002', {
    extend: 'Ext.app.Controller',
    views: [
        'SYS.SYS002.Panel',
        'SYS.SYS002.Tree',
        'SYS.SYS002.Tab'
    ],
    stores: [
        'SYS.SYS002.TreeStore'
    ],

    refs: [{
        ref: 'tabPanel',
        selector: 'SYS002tab'
    }],

    init: function() {
        this.control({
            'SYS002tree': {
                itemclick: this.treeNodeClick
            }
        })
    },

    treeNodeClick:function( treeNode, record, item, index, e, eOpts ) {
        var tabpanel=this.getTabPanel();

        Ext.log(record.raw.id);
        var tab = tabpanel.getComponent(record.raw.id);
        console.log(tab);
        if(tab==null){
            this.createTab(tabpanel,record);
        }else {
            this.ativeTab(tabpanel,tab);
        }

    },
    ativeTab:function( tabpanel, tab){
        tabpanel.setActiveTab(tab);
    },
    createTab:function( tabpanel, record){
        tabpanel.add({
            id:record.raw.id
            ,title:record.raw.text
            ,closable:true
        })
    },
    logout:function(){
        Ext.log('logout');

        var mainVP = Ext.getCmp('mainVP');
        mainVP.removeAll();

        mainVP.add({
            xtype: 'loginform',
            url: 'http://localhost:8080/agricloud/user/login.json'
        });
    }
});

