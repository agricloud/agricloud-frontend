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
            'sys001loginform button[itemId=loginButton]': {
                click: this.doLogin
            }
        })
    },
    /**
     * 登入驗證
     */
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
            xtype: 'dashboardpanel'
        });
    },
    loginFail:function(form, action) {
        console.log('error');
    }
});

