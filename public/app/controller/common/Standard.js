/**
 * 功能群組維護
 */
Ext.define('Frontend.controller.common.Standard', {
    extend: 'Ext.app.Controller',
    execute: function(params) {
        var tab = Ext.getCmp('mainTab');
        tab.add({
            id: params.id,
            title: params.title,
            closable: true,
            layout:'fit',
            items: {
                xtype: params.tabXtype
            }
        });
    },
    doCreate: function() {
        this.store.insert(0, this.model);
    },
    doDelete:function(){
        var selection = this.grid.getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
    },
    doUpdate: function() {
        this.store.sync({
            success : function(){
                console.log("success");
                Ext.Msg.alert('Status', '更新成功');
            },
            failure : function(response, options){
                console.log("failure");
                Ext.Msg.alert('Status', '更新失敗');
            }  
        });
    },
    onGridSelection:function(selModel, selections,eOpts){
        this.selections=selections;
        this.selModel=selModel;

        //必須利用refs 取得實體介面已 render的物件
        this.deleteButton.setDisabled(selections.length === 0);
        //下列方式無法運作 雖然不會報錯
        // var delBtn=this.grid.down('#deleteButton');
        // delBtn.setDisabled(true);
    },
    onPanelRendered: function() {
        this.grid=this.getGridPanel();
        this.deleteButton=this.getDeleteButton();
    }
});

