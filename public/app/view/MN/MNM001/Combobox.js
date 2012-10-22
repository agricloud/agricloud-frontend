Ext.define('Frontend.view.MN.MNM001.Combobox', {
	extend: 'Ext.form.ComboBox',
    alias : 'widget.mnm001combobox',
    id:'mnm001combobox',
    itemId:'mnm001combobox',
    store: 'US.USM002.Store',
    queryMode: 'local',
    displayField: 'userGroupId',
    valueField: 'userGroupId'
});