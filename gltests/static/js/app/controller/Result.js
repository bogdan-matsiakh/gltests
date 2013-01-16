Ext.define('GL.controller.Result', {
    extend: 'Ext.app.Controller',
    
    views: ['chart.Chart'],
    stores: ['Result'],
    
    init: function() {
        this.control({
            'chart': {
            	render: this.renderChart
            }
        });
    },
    
    renderChart: function () {
    	say('chart rendered');
    	var store = Ext.getStore('Result');
    	Ext.Ajax.request({
            url : '/submit',
            method: 'POST', 
            params: {
                right: 0
            },            
    	})
    	say(store.data.getCount());
    }

});
