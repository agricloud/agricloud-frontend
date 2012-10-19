Ext.define('Frontend.view.common.toolbar.Standard' ,{
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.commontoolbarstandard',
    requires: [ 
        'Frontend.view.common.button.Create',
        'Frontend.view.common.button.Delete',
        'Frontend.view.common.button.Update'
    ],
    items:[{
    	xtype:'commonbuttoncreate'
    },
    {
    	xtype:'commonbuttondelete'
    },
    {
        xtype:'commonbuttonupdate'
    }]
});