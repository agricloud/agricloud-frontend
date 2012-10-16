## ExtJS 程式撰寫標準規格

### 一般變數及函數命名

小駝峰式命名法（lower camel case）：
第一個單字以小寫字母開始；第二個單字的首字母大寫，例如：firstName、lastName。

### JSON 括號及對齊方式

    items: [{
        xtype: ‘panel’
    }, {
        xtype: ‘form’
    }],

### 使用 control(selector, listeners)

```
Ext.define('AM.controller.Users', {
    init: function() {
        this.control({
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    updateUser: function(button) {
        console.log('clicked the Save button');
    }
});
```