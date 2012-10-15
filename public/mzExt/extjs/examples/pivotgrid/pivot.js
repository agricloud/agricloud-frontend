Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    
     var grid = Ext.create('Ext.ux.grid.mzPivotGrid', {
        renderTo:       document.body,
        title:          'Pivot grid',
        height:         300,
        width:          600,
        enableLocking:  false,
        viewConfig: {
            trackOver:      true,
            stripeRows:     false
        },
        
        tbar: [{
            xtype:  'button',
            text:   'refresh',
            handler: function(){
                grid.getStore().load();
            }
        }],
        store:  new Ext.data.ArrayStore({
            proxy: {
                type:       'ajax',
                url:        'pivot.json',
                reader: {
                    type:       'array'
                }
            },
            autoLoad:   true,
            fields: [
                'economy', 'region', 'year',
                {name: 'procedures', type: 'int'},
                {name: 'time',       type: 'int'}
            ]
        }),
        
        aggregate: [{
            measure:    'time',
            header:     'Time',
            aggregator: 'sum',
            align:      'right',
            renderer:   Ext.util.Format.numberRenderer('0')
        },{
            measure:    'procedures',
            header:     'Procedures',
            aggregator: 'sum',
            align:      'right',
            renderer:   Ext.util.Format.numberRenderer('0')
        }],
        
        leftAxisTitle:  'Some report',
        leftAxis: [{
            width:      90,
            dataIndex:  'region',
            header:     'Region'
        },{
            width:      90,
            dataIndex:  'economy',
            header:     'Country'
        }],
        
        topAxis: [{
            dataIndex:  'year',
            width:      80
        }]
    });

    
});
