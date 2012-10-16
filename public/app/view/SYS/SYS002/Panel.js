Ext.define('Frontend.view.SYS.SYS002.Panel' ,{
    extend: 'Ext.Panel',
    alias : 'widget.SYS002panel',
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
        xtype:'SYS002tree',
    }, {
        xtype:'SYS002tab',
    }]
});
