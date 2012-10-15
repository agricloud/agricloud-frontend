Ext.define('Frontend.store.TreeStore' ,{
    extend: 'Ext.data.TreeStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/agricloud/menu/tree.json',
        reader: {
            type: 'json',
            root: 'children'
        }
    },
    // 设置根节点
    root : {
        expanded: true,
        text: 'Root'

    }
});
