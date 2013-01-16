Ext.Loader.setConfig({'enabled':true});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'GL',

    appFolder: '/static/js/app',
    
    controllers: [
       'Result'
    ],
    
    launch: function() {        
        Ext.Ajax.defaultHeaders = {'X-CSRFToken':Ext.util.Cookies.get('csrftoken')};
            Ext.create('GL.view.ViewportResult');
    }
});

function say(attr) {
	console.log(attr);
}
