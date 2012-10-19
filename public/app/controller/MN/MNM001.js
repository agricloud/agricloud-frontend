/**
 * 功能群組維護
 */
Ext.define('Frontend.controller.MN.MNM001', {
    extend: 'Ext.app.Controller',
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
                selectionchange: this.ativeDeleteButton
            }
        })



        //store 可以不用使用refs 就取得實體並且可進行資料操作
        this.store=this.getStore("MN.MNM001.Store");

    },
    execute: function(params) {
        console.log('Execute MNM001');
        var tab = Ext.getCmp('mainTab');
        tab.add({
            id: params.id,
            title: params.title,
            closable: true,
            layout:'fit',
            items: {
                xtype: 'mnm001panel'
            }
        });
    },
    doCreate: function() {
        var record = new Frontend.model.MN.MNM001.MenuGroup();
        this.store.insert(0, record);
    },
    doDelete:function(){

        var selection = this.getGridPanel().getSelectionModel().getSelection()[0];
        console.log(selection);

        if (selection) {
            this.store.remove(selection);
        }
    },
    doUpdate: function() {

        this.store.sync();
    },
    ativeDeleteButton:function(selModel, selections){
        //必須利用refs 取得實體介面已 render的物件
        this.getDeleteButton().setDisabled(selections.length === 0);
        console.log(this.getDeleteButton());
        //下列方式無法運作 雖然不會報錯
        // var delBtn=this.grid.down('#deleteButton');
        // delBtn.setDisabled(true);
    }
});

