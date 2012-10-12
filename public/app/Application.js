
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Module': 'modules'
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
                },
                failure: function(form, action) {
                    console.log('error');
                }
            });
        }
    });
};

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
                    xtype: 'loginform',
                    url: 'http://localhost:8080/agricloud/user/login.json',
                    listeners: {
                        afterrender: __login_form_init_lambda
                    }
                }
            ]


        });
    }
});
