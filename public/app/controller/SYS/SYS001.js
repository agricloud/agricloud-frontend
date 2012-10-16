/**
 * 使用者登入作業
 */
Ext.define('Frontend.controller.SYS.SYS001', {
    extend: 'Ext.app.Controller',
    views: [
        'SYS.SYS001.LoginForm'
    ], 
    init: function() {
        this.control({
            'sys001loginform button[itemId=loginBtn]': {
                click: this.doLogin
            }
        })
    },
    doLogin: function(btn, e, eOpts) {
        var form = btn.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                success: this.dashboardRend,
                failure: this.loginFail
            });
        }
    },
    dashboardRend: function(){
        console.log('ok');

        var mainVP = Ext.getCmp('mainVP');
        mainVP.removeAll();

        mainVP.add({
            xtype: 'sys002panel'
        });
    },
    loginFail:function(form, action) {
        console.log('error');
    }
});

