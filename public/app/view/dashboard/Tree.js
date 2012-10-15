Ext.define('Frontend.view.dashboard.Tree' ,{
    extend: 'Ext.tree.Panel',
    alias : 'widget.dashboardtree',
    title: '功能表',
    region: 'west',
    id:'menutree',
    border: true,
    /*split: true,*/
    collapsible: true,
    resizable: true,
    width: 220,
    minSize: 100,
    maxSize: 360,
    store:'TreeStore'
});
