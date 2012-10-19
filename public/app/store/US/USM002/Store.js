Ext.define('Frontend.store.US.USM002.Store' ,{
    model:'Frontend.model.US.USM002.UserGroup',
    extend: 'Ext.data.Store',
    alias : 'widget.usm002store',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/agricloud/rest/userGroup/',
        reader: {
            type: 'json',
            root: 'items'
        },
        writer: {
            type: 'json'
        },
        afterRequest:function(request,success){
            if(request.method == 'PUT'){
                 // your code
            }
        }
    },
    listeners: {
        write: function(store, operation) {
            store.load();
        }
    }
});
