
var __start_editor = function() {
	Ext.tip.QuickTipManager.init();
    
    var form = Ext.create('Ext.form.Panel', {
        bodyPadding:    10,
        items: [{
            xtype:      'textfield',
            name:       'path',
            value: 		'Application.js',
            anchor:     '100%',
            fieldLabel: '路徑',
            allowBlank: true
        }, {
        	xtype: 'button',
        	text: '讀取',
        	handler: function() {
        		var path = this.up('form').getForm().findField('path').getValue();
        		var form = this.up('form');
        		Ext.Ajax.request({
				    url: '/editor/readExtJsFile',
				    params: {
				        path: path
				    },
				    success: function(response){
				        var text = response.responseText;
				        console.log(text);
				        var editor = form.getForm().findField('editor');
				        editor.setValue(text);
				    }
				});
        	}
        }, {
            xtype:      'codemirror',
            pathModes:  '/codemirror/mode',
            pathExtensions: '/codemirror/lib/util',
            name:       'editor',
            fieldLabel: '代碼區',
            anchor:     '100% -20',
            //hideLabel:  true,
            labelAlign: 'top',
            mode:       'text/x-javascript',
            listeners: {
                modechanged: function(editor, newMode, oldMode) {
                }
            }
        }],
        buttons: [{
            text: '儲存',
            handler: function() {
                if(form.getForm().isValid()){
                    alert(form.getForm().getValues().f);
                }
            }
        }]
    }); 
    
    var win = Ext.create('Ext.window.Window', {
        title:      '程式碼編輯器',
        width:      640,
        height:     480,
        minWidth:   360,
        minHeight:  240,
        layout:     'fit',
        plain:      true,
        items:      form
    });

    win.show();
};

Ext.onReady(function () {
    var map = new Ext.util.KeyMap(document,{
            //key : "abc" //doesn't work (mybe a bug)
            key: [69], // this works,
            ctrl: true,
            fn: __start_editor
        }
    );
});