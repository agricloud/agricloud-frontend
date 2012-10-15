
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
                    url: 'http://localhost:8080/agricloud/user/login.json'
                }
                /*{
                    xtype: 'dashboardpanel'
                }*/
            ]
        });
    }
});
