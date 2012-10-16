Ext.define('Frontend.controller.SYS.SYS002', {
    extend: 'Ext.app.Controller',
    views: [
        'SYS.SYS002.Panel'
    ],
    stores: [
        'SYS.SYS002.TreeStore'
    ],
    refs: [{
        ref: 'tabPanel',
        selector: 'sys002tab'
    }],

    init: function() {
        this.control({
            'sys002tree': {
                itemclick: this.treeNodeClick
            }
        })
    },

    treeNodeClick:function( treeNode, record, item, index, e, eOpts ) {
        var tabpanel=this.getTabPanel();
        console.log(tabpanel);
        console.log(record.raw.id);
        var tab = tabpanel.getComponent(record.raw.id);
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

        console.log("tab view xtype:"+record.raw.id.toLowerCase()+'panel');
        tabpanel.add({
            id:record.raw.id,
            title:record.raw.text,
            closable:true,
            items:[{
                xtype:record.raw.id.toLowerCase()+'panel'
            }]
        });
        console.log("tab view xtype:"+record.raw.id.toLowerCase()+'panel');
    },
    logout:function(){
        Ext.log('logout');

        var mainVP = Ext.getCmp('mainVP');
        mainVP.removeAll();

        mainVP.add({
            xtype: 'sys001loginform',
            url: 'http://localhost:8080/agricloud/user/login.json'
        });
    }
});

