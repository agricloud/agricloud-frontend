Ext.define('Frontend.view.common.tabpanel.Standard' ,{
    extend: 'Ext.tab.Panel',
    alias : 'widget.commontabpanelstandard',
    requires: [ 
        'Frontend.view.common.toolbar.Standard'
    ],
    frame: false,
    border: false,
    dockedItems: [{
    	xtype:'commontoolbarstandard'
    }]

});