/**
 * 功能群組維護
 */
Ext.define('Frontend.controller.MN.MNM001', {
    extend: 'Frontend.controller.common.Standard',
    views: [
        'MN.MNM001.Panel'
    ], 
    stores: [
        'MN.MNM001.Store',
        'US.USM002.Store'
    ],
    models: [
        'MN.MNM001.MenuGroup',
        'US.USM002.UserGroup'
    ],
    refs: [{
        ref: 'deleteButton',
        selector: 'mnm001panel commonbuttondelete'
    },{
        ref: 'gridPanel',
        selector: 'mnm001panel'
    },{
        ref: 'combobox',
        selector: 'mnm001combobox'
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
            'mnm001combobox': {
                select:this.comboboxSelect
            },
            'mnm001panel': {
                selectionchange: this.onGridSelection,
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
    },
    comboboxSelect: function( combo, records, eOpts ) {
        this.selections[0].set('userGroupDes',records[0].get('description') );
    }
});

