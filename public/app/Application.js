
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
        'Login'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'loginform'
                }
            ]
        });
    }
});
