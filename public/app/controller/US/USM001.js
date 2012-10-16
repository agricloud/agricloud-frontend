/**
 * 使用者資料維護作業
 *
 */
Ext.define('Frontend.controller.US.USM001', {
    extend: 'Ext.app.Controller',
    views: [
        'US.USM001.MainPanel'
    ],
    init: function() {
        console.log('USM001 Controller Init');
    },
    /**
     * 選單執行此程式
     */
    execute: function(params) {
        console.log('Execute USM001');
        var tab = Ext.getCmp('mainTab');
        tab.add({
            id: params.id,
            title: params.title,
            closable: true,
            items: {xtype: 'usm001mainpanel'}
        });
    }
});

