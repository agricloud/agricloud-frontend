

Ext.define('Frontend.view.US.USM002.Panel' ,{
    extend: 'Frontend.view.common.gridpanel.standard',
    alias : 'widget.usm002panel',
    columns: [
        { header: 'userGroupId',  dataIndex: 'userGroupId' },
        { header: 'description', dataIndex: 'description', flex: 1 }
    ],
    store:'US.USM002.Store'
});