
Ext.define('Frontend.view.MN.MNM001.Panel' ,{
    extend: 'Frontend.view.common.gridpanel.standard',
    alias : 'widget.mnm001panel',
    columns: [
        { header: 'menuId',  dataIndex: 'menuId', flex: 1,
        	field: {
                xtype: 'textfield'
            }
        },
        { header: 'menuDes', dataIndex: 'menuDes',
        	field: {
                xtype: 'textfield'
            } 
        },
        { header: 'userGroupId', dataIndex: 'userGroupId',
        	field: {
                xtype: 'textfield'
            }
        },
        { header: 'userGroupDes', dataIndex: 'userGroupDes',
        	field: {
                xtype: 'textfield'
            } 
        }
    ],
    plugins: [{
	    	ptype:'rowediting'
	}],
    store:'MN.MNM001.Store'
});