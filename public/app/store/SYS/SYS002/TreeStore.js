Ext.define('Frontend.store.SYS.SYS002.TreeStore' ,{
    extend: 'Ext.data.TreeStore',
    alias : 'widget.sys002treestore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/agricloud/menu/tree.json',
        reader: {
            type: 'json',
            root: 'children'
        }
    },
    root : {
        expanded: true,
        text: 'Root'

    }
});
