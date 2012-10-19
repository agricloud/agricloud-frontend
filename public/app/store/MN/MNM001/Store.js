Ext.define('Frontend.store.MN.MNM001.Store' ,{
    model:'Frontend.model.MN.MNM001.MenuGroup',
    extend: 'Ext.data.Store',
    alias : 'widget.mnm001store',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/agricloud/rest/menuGroup/',
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
