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
                success: this.loginSuccess,
                failure: this.loginFailed
            });
        }
        else {
            Ext.Msg.alert('無法登入', '請檢查表單資料！');
        }
    },
    loginSuccess: function() {
        var mainVP = Ext.getCmp('mainVP');
        mainVP.removeAll();
        mainVP.add({xtype: 'sys002panel'});
    },
    loginFailed: function(form, action) {
        Ext.Msg.alert('無法登入', '無法通過驗證！');
    }
});

