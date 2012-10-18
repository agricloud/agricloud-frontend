Ext.define('Frontend.view.common.gridpanel.standard' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.commongridpanelstandard',
    requires: [ 
        'Frontend.view.common.toolbar.Standard'
    ],  
    frame: false,
    border: false,
    dockedItems: [{
    	xtype:'commontoolbarstandard'
    }]

});