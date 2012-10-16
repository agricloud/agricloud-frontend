Ext.define('Frontend.view.SYS.SYS002.Panel' ,{
    extend: 'Ext.Panel',
    alias : 'widget.sys002panel',
    region: 'center',
    layout: 'border',
    frame: false,
    border: false,
    bodyStyle: {
    },
    items: [{
        xtype: 'box',
        region: 'north',
        autoLoad: {
            url: 'header.html',
            scripts: false
        }
    }, {
        xtype:'sys002tree',
    }, {
        xtype:'sys002tab',
    }]
});
