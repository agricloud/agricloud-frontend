Ext.define('Frontend.view.common.toolbar.Standard' ,{
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.commontoolbarstandard',
    requires: [ 
        'Frontend.view.common.button.Update',
        'Frontend.view.common.button.Create',
        'Frontend.view.common.button.Delete'
    ],
    items:[{
    	xtype:'commonbuttoncreate'
    },
    {
    	xtype:'commonbuttonupdate'
    },
    {
    	xtype:'commonbuttondelete'
    }]
});