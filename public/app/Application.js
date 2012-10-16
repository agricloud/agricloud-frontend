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
        'SYS.SYS001',   //使用者登入
        'SYS.SYS002',   //主畫面
        'MN.MNM001'     //群組權限維護
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            id: 'mainVP',
            layout: 'fit',
            items: [{
                xtype: 'sys001loginform',
                url: 'http://localhost:8080/agricloud/user/login.json'
            }]
        });
    }
});
