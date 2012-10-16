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
        /*
        var tabpanel = this.getTabPanel();
        console.log(tabpanel);

        Ext.log('Click on: ' + record.raw.id);

        var tab = tabpanel.getComponent(record.raw.id);

        Ext.log(tab);

        if (tab == null) {
            this.createTab(tabpanel, record);
        }
        else {
            this.ativeTab(tabpanel, tab);
        }
        */

        //改用 Controller Specified Methods
        console.log('Get Controller: ' + record.raw.id);
        var controller = this.getController(record.raw.id);
        //controller.init();
        controller.execute({id: record.raw.id, title: record.raw.text});
    },
    ativeTab: function(tabpanel, tab) {
        tabpanel.setActiveTab(tab);
    },
    createTab: function(tabpanel, record) {
        tabpanel.add({
            id: record.raw.id,
            title: record.raw.text,
            closable: true
        });
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

