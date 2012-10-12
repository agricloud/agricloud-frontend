Ext.define('Frontend.view.login.Form' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.loginform',
    region: 'center',
    frame: false,
    border: false,
    defaultType: 'textfield',
    monitorValid: true,
    margins: '3 3 3 3',
    bodyStyle: {
        padding: '320px 0 0 150px',
        background: '#fff url(images/loginform-bg.png) no-repeat'
    },
    items: [{
        fieldLabel: '帳號',
        labelWidth: 60,
        name: 'account',
        allowBlank: false
    }, {
        fieldLabel: '密碼',
        labelWidth: 60,
        name: 'password',
        inputType: 'password',
        allowBlank: false
    }, {
        xtype: 'button',
        text: '登入',
        itemId: 'loginBtn'
    }]
});
