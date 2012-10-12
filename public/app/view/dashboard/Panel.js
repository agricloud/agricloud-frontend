Ext.define('Frontend.view.dashboard.Panel' ,{
    extend: 'Ext.Panel',
    alias : 'widget.dashboardpanel',
    region: 'center',
    layout: 'border',
    frame: false,
    border: false,
    bodyStyle: {
    },
    items: [{
        id: 'menu',
        title: '功能表',
        region: 'west',
        layout: 'border',
        border: true,
        /*split: true,*/
        collapsible: true,
        resizable: true,
        width: 220,
        minSize: 100,
        maxSize: 360,
    }]
});
