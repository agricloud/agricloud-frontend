Ext.define('Frontend.view.dashboard.Panel' ,{
    extend: 'Ext.Panel',
    alias : 'widget.dashboardpanel',
    region: 'center',
    layout: 'border',
    frame: false,
    border: false,
    bodyStyle: {},
    items:[
        {
            xtype:'dashboardtree',
        },
        {
            xtype:'dashboardtab',
        }
    ]

});
