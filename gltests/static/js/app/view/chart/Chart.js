var store = Ext.create('Ext.data.Store', {
    fields: ['temperature', 'date'],
    data: [
        { temperature: 10, date: 'new Date(2011, 1, 1, 8)' },
        { temperature: 6, date: 'new Date(2011, 1, 1, 9)' },
        { temperature: 7, date: 'asd' },
        { temperature: 8, date: 'das' },
        { temperature: 8, date: 'das' },
        { temperature: 8, date: 'das' },
        { temperature: 8, date: 'das' },
        { temperature: 8, date: 'das' },
        { temperature: 1, date: 'qwe' }
    ]
});

Ext.define('GL.view.chart.Chart', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.chart',
	theme: 'Green',
	animate: true,
    shadow: true,
    width: 400,
    height: 300,
    store: 'Result',
    
    axes: [{
        title: 'Points',
        type: 'Numeric',
        position: 'left',
        fields: ['points'],
        minimum: 0,
        maximum: 20
    },{
        title: 'Name',
        type: 'Category',
        position: 'bottom',
        fields: ['name'],
    }],
    series: [{
        type: 'column',
        axis: 'left',
        gutter: 80,
        xField: 'name',
        yField: 'points'
    }]
});