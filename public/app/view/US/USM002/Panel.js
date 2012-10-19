
Ext.define('Frontend.view.US.USM002.Panel' ,{
    extend: 'Frontend.view.common.gridpanel.standard',
    alias : 'widget.usm002panel',
    columns: [
        { header: 'userGroupId',  dataIndex: 'userGroupId',
        	field: {
                xtype: 'textfield'
            }
        },
        { header: 'description', dataIndex: 'description', flex: 1,
        	field: {
                xtype: 'textfield'
            } 
        }
    ],
    selType: 'rowmodel',
    plugins: [{
	    	ptype:'rowediting'
	}],
    store:'US.USM002.Store'
});