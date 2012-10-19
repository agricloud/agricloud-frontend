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
    refs: [{
        ref: 'deleteButton',
        selector: 'commonbuttondelete'
    },{
        ref: 'gridPanel',
        selector: 'usm002panel'
    }],
    init: function() {
        this.control({
            'usm002panel commonbuttoncreate': {
                click: this.doCreate
            }
        })
        this.control({
            'usm002panel commonbuttondelete': {
                click: this.doDelete
            }
        })
        this.control({
            'usm002panel commonbuttonupdate': {
                click: this.doUpdate
            }
        })
        this.control({
            'usm002panel': {
                selectionchange: this.ativeDeleteButton
            }
        })


        //store 可以不用使用refs 就取得實體並且可進行資料操作
        this.store=this.getStore("US.USM002.Store");

    },
    execute: function(params) {
        console.log('Execute USM002');
        var tab = Ext.getCmp('mainTab');
        tab.add({
            id: params.id,
            title: params.title,
            closable: true,
            layout:'fit',
            items: {
                xtype: 'usm002panel'
            }
        });
    },
    doCreate: function() {
        var record = new Frontend.model.US.USM002.UserGroup();
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

