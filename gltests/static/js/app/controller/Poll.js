Ext.define('GL.controller.Poll', {
    extend: 'Ext.app.Controller',
    
    views: ['poll.Index'],
    models: ['Poll', 'Question', 'Choice'],
    stores: [],
    
    init: function() {
        this.control({
            'poll button[action = startPoll]': {
            	click: this.renderPoll
            }
        });
    },
    
    renderPoll: function () {
    	console.log('start poll');
    	Ext.Ajax.request({
            url : '/question',
            method: 'POST', 
            params: {
                id: 0
            },            
            success: this.startPoll,
            failure: this.failureStart
        });  
    },
    
    startPoll: function (response, request) {
        console.log('success start poll');
        var result = JSON.parse(response.responseText);
        console.log(result);
    }
});
