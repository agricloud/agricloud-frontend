Ext.define('Frontend.view.common.panel.standard' ,{
    extend: 'Ext.Panel',
    alias : 'widget.commonpanelstandard',
    requires: [ 
        'Frontend.view.common.toolbar.Standard'
    ],  
    frame: false,
    border: false,
    dockedItems: [{
    	xtype:'commontoolbarstandard'
    }]

});