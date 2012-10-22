
Ext.define('Frontend.view.MN.MNM001.Panel' ,{
    extend: 'Frontend.view.common.gridpanel.standard',
    alias : 'widget.mnm001panel',
    requires:['Frontend.view.MN.MNM001.Combobox'],
    columns: [
        { 
            header: 'menuId',  
            dataIndex: 'menuId', 
            flex: 1,
        	field: {
                xtype: 'textfield'
            }
        },
        { 
            header: 'menuDes', 
            dataIndex: 'menuDes'
        },
        { 
            header: 'userGroupId', 
            dataIndex: 'userGroupId',
        	field: {
                xtype: 'mnm001combobox'
            }
        },
        { 
            header: 'userGroupDes', 
            dataIndex: 'userGroupDes' 
        }
    ],
    plugins: [{
	    	ptype:'rowediting'
	}],
    store:'MN.MNM001.Store'
});