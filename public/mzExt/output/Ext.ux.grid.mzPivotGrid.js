Ext.data.JsonP.Ext_ux_grid_mzPivotGrid({"component":false,"singleton":false,"statics":{"cfg":[],"property":[],"event":[],"css_var":[],"method":[],"css_mixin":[]},"files":[{"filename":"Ext.ux.grid.mzPivotGrid.js","href":"Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid"}],"mixedInto":[],"code_type":"ext_define","superclasses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.grid.mzPivotGrid</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.Panel<div class='subclass '><strong>Ext.ux.grid.mzPivotGrid</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.ux.view.mzPivotChunker' rel='Ext.ux.view.mzPivotChunker' class='docClass'>Ext.ux.view.mzPivotChunker</a></div><div class='dependency'><a href='#!/api/Ext.ux.grid.column.mzPivotColumn' rel='Ext.ux.grid.column.mzPivotColumn' class='docClass'>Ext.ux.grid.column.mzPivotColumn</a></div><h4>Files</h4><div class='dependency'><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid' target='_blank'>Ext.ux.grid.mzPivotGrid.js</a></div></pre><div class='doc-contents'><p>@license Dual license available: <a href=\"http://www.gnu.org/copyleft/gpl.html\">GPLv3</a> &amp; commercial. Commercial license could be purchased from <a href=\"http://www.mzsolutions.eu/shop/item/bcceaa94-863a-5624-912b-7aa6cdf5a36a\">here</a>.</p>\n\n<p>@version 1.3</p>\n\n<p>Provides a pivot grid useful for reporting.\nThe component works with Extjs 4.1.x.</p>\n\n<h3>Changelog:</h3>\n\n<h4>21.08.2012 - v1.1</h4>\n\n<ul>\n<li>Changed the grid to allow expanding/collapsing the row groups.</li>\n</ul>\n\n\n<h4>22.08.2012 - v1.2</h4>\n\n<ul>\n<li>Created a summary feature to allow row groups to summarize the values. (sum, avg, min, max, count).</li>\n</ul>\n\n\n<h4>18.09.2012 - v1.3:</h4>\n\n<ul>\n<li>Added \"enableGrouping\" to use grouping or not.</li>\n<li>Added \"refresh\" method to reconfigure the pivot grid.</li>\n<li>Added \"expandAll\" and \"collapseAll\" methods.</li>\n<li>Added the posibility to sort the dimensions (leftAxis/topAxis records).</li>\n<li>Fixed the aggregator function so that if no record is available it returns an empty string.</li>\n</ul>\n\n\n<h1>Example usage:</h1>\n\n<p><p><img src=\"images/Ext.ux.grid.mzPivotGrid1.png\" alt=\"Ext.ux.grid.mzPivotGrid component\"></p></p>\n\n<pre><code> var grid = Ext.create('<a href=\"#!/api/Ext.ux.grid.mzPivotGrid\" rel=\"Ext.ux.grid.mzPivotGrid\" class=\"docClass\">Ext.ux.grid.mzPivotGrid</a>', {\n    renderTo:       document.body,\n    title:          'Pivot grid',\n    height:         300,\n    width:          600,\n    enableLocking:  false,\n    viewConfig: {\n        trackOver:      true,\n        stripeRows:     false\n    },\n\n    tbar: [{\n        xtype:  'button',\n        text:   'refresh',\n        handler: function(){\n            grid.getStore().load();\n        }\n    }],\n    store:  new Ext.data.ArrayStore({\n        proxy: {\n            type:       'ajax',\n            url:        'pivot.json',\n            reader: {\n                type:       'array'\n            }\n        },\n        autoLoad:   true,\n        fields: [\n            'economy', 'region', 'year',\n            {name: 'procedures', type: 'int'},\n            {name: 'time',       type: 'int'}\n        ]\n    }),\n\n    aggregate: [{\n        measure:    'time',\n        header:     'Time',\n        aggregator: 'sum',\n        align:      'right',\n        renderer:   Ext.util.Format.numberRenderer('0')\n    },{\n        measure:    'procedures',\n        header:     'Procedures',\n        aggregator: 'sum',\n        align:      'right',\n        renderer:   Ext.util.Format.numberRenderer('0')\n    }],\n\n    leftAxisTitle:  'Some report',\n    leftAxis: [{\n        width:      90,\n        dataIndex:  'region',\n        header:     'Region'\n    },{\n        width:      90,\n        dataIndex:  'economy',\n        header:     'Country'\n    }],\n\n    topAxis: [{\n        dataIndex:  'year',\n        width:      80\n    }]\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-aggregate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-aggregate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-aggregate' class='name expandable'>aggregate</a><span> : Array</span></div><div class='description'><div class='short'>Define the fields you want to aggregate in the pivot grid. ...</div><div class='long'><p>Define the fields you want to aggregate in the pivot grid. You can have one or multiple fields.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>    aggregate: [{\n        measure:    'value',        // what field is aggregated\n        header:     'Total',        // column title\n        aggregator: 'sum',          // function used for aggregating\n        align:      'right'         // grid cell alignment\n    },{\n        measure:    'quantity',\n        header:     'Quantity',\n        aggregator: 'sum',\n        align:      'right',\n        renderer:   Ext.util.Format.numberRenderer('0') // grid cell renderer\n    }]\n</code></pre>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-columnLines' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-columnLines' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-columnLines' class='name expandable'>columnLines</a><span> : Boolean</span></div><div class='description'><div class='short'>Set this on false if you don't want to show the column lines. ...</div><div class='long'><p>Set this on false if you don't want to show the column lines.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-enableGrouping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-enableGrouping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-enableGrouping' class='name expandable'>enableGrouping</a><span> : Boolean</span></div><div class='description'><div class='short'>Set this on true if you want to group rows/cols. ...</div><div class='long'><p>Set this on true if you want to group rows/cols.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-enableLocking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-enableLocking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-enableLocking' class='name expandable'>enableLocking</a><span> : Boolean</span></div><div class='description'><div class='short'>Set this on false if you don't want to lock the left axis columns. ...</div><div class='long'><p>Set this on false if you don't want to lock the left axis columns.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-leftAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-leftAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-leftAxis' class='name expandable'>leftAxis</a><span> : Array</span></div><div class='description'><div class='short'>Define the left axis used by the grid. ...</div><div class='long'><p>Define the left axis used by the grid.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>    leftAxis: [{\n        width:      80,         // column width in the grid\n        dataIndex:  'person',   // field used for extracting data from the store\n        header:     'Persons'   // column title\n    },{\n        width:      90,\n        dataIndex:  'quarter',\n        header:     'Quarter'\n    },{\n        width:      90,\n        dataIndex:  'product',\n        header:     'Products'\n    }]\n</code></pre>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-leftAxisTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-leftAxisTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-leftAxisTitle' class='name expandable'>leftAxisTitle</a><span> : String</span></div><div class='description'><div class='short'>Set the pivot grid title used above the left axis columns. ...</div><div class='long'><p>Set the pivot grid title used above the left axis columns.</p>\n<p>Defaults to: <code>&quot;&amp;nbsp;&quot;</code></p></div></div></div><div id='cfg-loadMask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-loadMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-loadMask' class='name expandable'>loadMask</a><span> : Boolean</span></div><div class='description'><div class='short'>Set this on false if you don't want to see the loading mask. ...</div><div class='long'><p>Set this on false if you don't want to see the loading mask.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-topAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-cfg-topAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-cfg-topAxis' class='name expandable'>topAxis</a><span> : Array</span></div><div class='description'><div class='short'>Define the top axis used by the grid. ...</div><div class='long'><p>Define the top axis used by the grid.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>    topAxis: [{\n        width:      80,         // column width in the grid\n        dataIndex:  'city'      // field used for extracting data from the store\n    }]\n</code></pre>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-collapseAll' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-method-collapseAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-method-collapseAll' class='name expandable'>collapseAll</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Collapse all groups if enableGrouping is true. ...</div><div class='long'><p>Collapse all groups if enableGrouping is true.</p>\n</div></div></div><div id='method-expandAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-method-expandAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-method-expandAll' class='name expandable'>expandAll</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Expand all groups if enableGrouping is true. ...</div><div class='long'><p>Expand all groups if enableGrouping is true.</p>\n</div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.grid.mzPivotGrid'>Ext.ux.grid.mzPivotGrid</span><br/><a href='source/Ext.ux.grid.mzPivotGrid.html#Ext-ux-grid-mzPivotGrid-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.grid.mzPivotGrid-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Refresh the pivot grid using the new axis and aggregates. ...</div><div class='long'><p>Refresh the pivot grid using the new axis and aggregates. It does not refresh the store assigned to it.</p>\n</div></div></div></div></div></div></div>","allMixins":[],"mixins":[],"requires":["Ext.ux.view.mzPivotChunker","Ext.ux.grid.column.mzPivotColumn"],"inheritable":false,"members":{"cfg":[{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"aggregate","id":"cfg-aggregate","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"columnLines","id":"cfg-columnLines","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"enableGrouping","id":"cfg-enableGrouping","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"enableLocking","id":"cfg-enableLocking","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"leftAxis","id":"cfg-leftAxis","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"leftAxisTitle","id":"cfg-leftAxisTitle","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"loadMask","id":"cfg-loadMask","tagname":"cfg"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"topAxis","id":"cfg-topAxis","tagname":"cfg"}],"property":[],"event":[],"css_var":[],"css_mixin":[],"method":[{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"collapseAll","id":"method-collapseAll","tagname":"method"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"expandAll","id":"method-expandAll","tagname":"method"},{"owner":"Ext.ux.grid.mzPivotGrid","meta":{},"name":"refresh","id":"method-refresh","tagname":"method"}]},"inheritdoc":null,"meta":{"docauthor":["Adrian Teodorescu (ateodorescu@gmail.com; http://www.mzsolutions.eu)"],"author":["Adrian Teodorescu (ateodorescu@gmail.com; http://www.mzsolutions.eu)"]},"private":false,"subclasses":[],"name":"Ext.ux.grid.mzPivotGrid","alternateClassNames":["Ext.grid.mzPivotGrid"],"aliases":{"widget":["mzpivotgrid"]},"uses":[],"tagname":"class","extends":"Ext.grid.Panel","id":"class-Ext.ux.grid.mzPivotGrid"});