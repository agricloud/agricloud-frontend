Ext.define('Frontend.controller.Dashboard', {
    extend: 'Ext.app.Controller',
    views: [
        'dashboard.Panel','dashboard.Tree'
    ],
    stores: [
        'TreeStore'
    ],

    init: function() {
    	// var Panel=this.getView('dashboard.Panel').create();
    	// var Tree=this.getView('dashboard.Tree').create();
    	// Panel.add(Tree);
    	// console.log(Panel);
    	// alert(1);
    }
});
