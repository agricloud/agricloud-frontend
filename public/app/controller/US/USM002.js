/**
 * 使用者群組維護
 */
Ext.define('Frontend.controller.US.USM002', {
    extend: 'Ext.app.Controller',
    views: [
        'US.USM002.Panel'
    ], 
    stores: [
        'US.USM002.Store'
    ],
    models: [
        'US.USM002.UserGroup'
    ],
    init: function() {

    }
    ,execute: function(params) {
        console.log('Execute USM002');
        var tab = Ext.getCmp('mainTab');
        tab.add({
            id: params.id,
            title: params.title,
            closable: true,
            items: {
                xtype: 'usm002panel'
            }
        });
    }
});

