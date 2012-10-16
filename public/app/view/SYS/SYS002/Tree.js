Ext.define('Frontend.view.SYS.SYS002.Tree' ,{
    extend: 'Ext.tree.Panel',
    alias : 'widget.SYS002tree',
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
    store:'SYS.SYS002.TreeStore'
});
