Ext.Loader.setConfig({'enabled':true});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'GL',

    appFolder: '/static/js/app',
    
    controllers: [
        'Login',
        'Poll'
    ],
    
    launch: function() {        
        Ext.Ajax.defaultHeaders = {'X-CSRFToken':Ext.util.Cookies.get('csrftoken')};
            Ext.create('GL.view.Viewport');
    }
});

function say(attr) {
	console.log(attr);
}
