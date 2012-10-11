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
        padding: '10px',
        background: 'transparent'
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
    }]
});
