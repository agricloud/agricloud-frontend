Ext.define('Frontend.controller.Login', {
    extend: 'Ext.app.Controller',
    views: [
        'login.Form'
    ], 

    init: function() {
		

        this.control({
            'loginform button': {
                click: this.doLogin
            }
        })
    },
    doLogin:function( btn, e, eOpts ) {
    	var form = btn.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                    console.log('ok');

                    var mainVP = Ext.getCmp('mainVP');
                    mainVP.removeAll();


                    mainVP.add({
                        xtype: 'dashboardpanel'
                    });
                    



                },
                failure: function(form, action) {
                    console.log('error');
                }
            });
        }
    }
});
