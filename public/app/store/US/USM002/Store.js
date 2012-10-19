Ext.define('Frontend.store.US.USM002.Store' ,{
    model:'Frontend.model.US.USM002.UserGroup',
    extend: 'Ext.data.Store',
    alias : 'widget.USM002store',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/agricloud/userGroup/rest',
        reader: {
            type: 'json',
            root: 'items'
        },
        writer: {
            type: 'json'
        }
    },
    listeners: {
        write: function(store, operation) {
            store.load();
        }
    }
});
