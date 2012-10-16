Ext.define('Frontend.view.MN.MNM001.Panel' ,{
    extend: 'Ext.Panel',
    alias : 'widget.mnm001panel',
    requires: [ 
        'Frontend.view.common.toolbar.Standard'
    ],
    frame: false,
    border: false,
    dockedItems: [
    {
    	xtype:'commontoolbarstandard',
    }
    ]

});
