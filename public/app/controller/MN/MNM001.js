/**
 * 群組權限維護
 */
Ext.define('Frontend.controller.MN.MNM001', {
    extend: 'Ext.app.Controller',
    views: [
        'MN.MNM001.Panel'
    ], 
    init: function() {

    },execute: function(params) {
        console.log('Execute MNM001');
        var tab = Ext.getCmp('mainTab');
        tab.add({
            id: params.id,
            title: params.title,
            closable: true,
            items: {xtype: 'mnm001panel'}
        });
    }
});

