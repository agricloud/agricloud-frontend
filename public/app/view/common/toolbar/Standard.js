Ext.define('Frontend.view.common.toolbar.Standard' ,{
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.commontoolbarstandard',
    requires: [
        'Frontend.view.common.button.Create',
        'Frontend.view.common.button.Delete',
        'Frontend.view.common.button.Update',
        'Frontend.view.common.button.Read'
    ],
    items:[{
        xtype:'commonbuttoncreate'
    },
    {
        xtype:'commonbuttondelete'
    },
    {
        xtype:'commonbuttonupdate'
    },
    {
        xtype:'commonbuttonread'
    }]
});