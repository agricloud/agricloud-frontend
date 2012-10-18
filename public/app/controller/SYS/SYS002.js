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
    treeNodeClick: function(treeNode, record, item, index, e, eOpts) {

        var tabpanel = this.getTabPanel();

        var tab = tabpanel.getComponent(record.raw.id);

        if (tab == null) {
            var controller = this.getController(record.raw.id);
            controller.execute({id: record.raw.id, title: record.raw.text});
        }
        
        tab = tabpanel.getComponent(record.raw.id);
        this.ativeTab({tabpanel:tabpanel,ativeTab:tab});
        

        //改用 Controller Specified Methods
        console.log('Get Controller: ' + record.raw.id);
    },
    ativeTab: function(params) {
        params.tabpanel.setActiveTab(params.ativeTab);
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

