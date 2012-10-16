Ext.define('Frontend.view.SYS.SYS001.LoginForm' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.sys001loginform',
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
        value: 'admin',
        allowBlank: true
    }, {
        fieldLabel: '密碼',
        labelWidth: 60,
        name: 'password',
        value: 'admin',
        inputType: 'password',
        allowBlank: true
    }, {
        xtype: 'button',
        text: '登入',
        itemId: 'loginButton'
    }]
});
