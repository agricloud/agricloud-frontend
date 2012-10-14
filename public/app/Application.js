
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Module': 'modules'
    }
});


Ext.application({
    name: 'Frontend',
    appFolder: 'app',
    controllers: [
        'Login', 'Dashboard'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            id: 'mainVP',
            layout: 'fit',
            items: [
                {
                    xtype: 'loginform',
                    url: 'http://localhost:8080/agricloud/user/login.json',
                    listeners: {
                        afterrender: __login_form_init_lambda
                    }
                }
                /*{
                    xtype: 'dashboardpanel'
                }*/
            ]
        });
    }
});


var __login_form_init_lambda = function(obj, eOpts) {
    var btn = obj.getComponent('loginBtn');
    btn.on('click', function(obj, e, eOpts) {
        console.log('button clicked');

        var form = this.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                    console.log('ok');

                    var mainVP = Ext.getCmp('mainVP');
                    mainVP.removeAll();

                    var tree={
                            xtype:'dashboardtree',
                            store: 'TreeStore'
                    };

                    mainVP.add({
                        xtype: 'dashboardpanel',
                        items:[tree]
                    });
                    



                },
                failure: function(form, action) {
                    console.log('error');
                }
            });
        }
    });
};
