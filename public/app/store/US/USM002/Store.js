Ext.define('Frontend.store.US.USM002.Store' ,{
    model:'UserGroup',
    extend: 'Ext.data.Store',
    alias : 'widget.USM002store',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/agricloud/userGroup/gridStore.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
