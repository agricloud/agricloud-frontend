Ext.define('Frontend.model.MN.MNM001.MenuGroup', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'menuId', type: 'string'},
        {name: 'menuDes',  type: 'string'},
        {name: 'userGroupId',  type: 'string'},
        {name: 'userGroupDes',  type: 'string'}
    ]
});