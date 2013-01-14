Ext.define('GL.controller.Poll', {
    extend: 'Ext.app.Controller',
    
    views: ['poll.Index'],
    
    init: function() {
        this.control({
            'poll button[action = startPoll]': {
            	click: this.startPoll
            }
        });
    },
    
    startPoll: function () {
    	console.log('start poll')
    }
});
