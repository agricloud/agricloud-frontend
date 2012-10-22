/**
 * 功能群組維護
 */
Ext.define('Frontend.controller.MN.MNM001', {
    extend: 'Frontend.controller.common.Standard',
    views: [
        'MN.MNM001.Panel'
    ], 
    stores: [
        'MN.MNM001.Store'
    ],
    models: [
        'MN.MNM001.MenuGroup'
    ],
    refs: [{
        ref: 'deleteButton',
        selector: 'mnm001panel commonbuttondelete'
    },{
        ref: 'gridPanel',
        selector: 'mnm001panel'
    }],
    init: function() {

        this.control({
            'mnm001panel commonbuttoncreate': {
                click: this.doCreate
            },
            'mnm001panel commonbuttondelete': {
                click: this.doDelete
            },
            'mnm001panel commonbuttonupdate': {
                click: this.doUpdate
            },
            'mnm001panel': {
                selectionchange: this.ativeDeleteButton,
                render: this.onPanelRendered
            }
        })
        //store 可以不用使用refs 就取得實體並且可進行資料操作
        this.store=this.getStore("MN.MNM001.Store");
        this.model=this.getModel("MN.MNM001.MenuGroup");
    },
    execute: function(params) {
        params.tabXtype='mnm001panel';
        this.callParent(arguments);
    }
});

