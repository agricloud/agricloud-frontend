/**
 * 使用者群組維護
 */
Ext.define('Frontend.controller.US.USM002', {
    extend: 'Frontend.controller.common.Standard',
    views: [
        'US.USM002.Panel'
    ], 
    stores: [
        'US.USM002.Store'
    ],
    models: [
        'US.USM002.UserGroup'
    ],
    refs: [{
        ref: 'deleteButton',
        selector: 'usm002panel commonbuttondelete'
    },{
        ref: 'gridPanel',
        selector: 'usm002panel'
    }],
    init: function() {
        this.control({
            'usm002panel commonbuttoncreate': {
                click: this.doCreate
            },
            'usm002panel commonbuttondelete': {
                click: this.doDelete
            },
            'usm002panel commonbuttonupdate': {
                click: this.doUpdate
            },
            'usm002panel commonbuttonread': {
                click: this.doRead
            },
            'usm002panel': {
                selectionchange: this.onGridSelection,
                render: this.onPanelRendered
            }
        })
        //store 可以不用使用refs 就取得實體並且可進行資料操作
        this.store=this.getStore("US.USM002.Store");
        this.model=this.getModel("US.USM002.UserGroup");

    },
    execute: function(params) {
        params.tabXtype='usm002panel';
        this.callParent(arguments);
    }
});

