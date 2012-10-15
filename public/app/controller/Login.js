Ext.define('Frontend.controller.Login', {
    extend: 'Ext.app.Controller',
    views: [
        'login.Form'
    ], 

    init: function() {
        this.control({
            'loginform button[itemId=loginBtn]': {
                click: this.doLogin
            }
        })
    },
    doLogin:function( btn, e, eOpts ) {
    	var form = btn.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                success: this.dashboardRend,
                failure: this.loginFail
            });
        }
    },
    dashboardRend:function(){
    	console.log('ok');

	    var mainVP = Ext.getCmp('mainVP');
	    mainVP.removeAll();

	    mainVP.add({
	        xtype: 'dashboardpanel'
	    });
    },
    loginFail:function(form, action) {
        console.log('error');
    }
});

