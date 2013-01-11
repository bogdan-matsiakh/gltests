Ext.Loader.setConfig({'enabled':true});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'GL',

    appFolder: '/static/js/app',
    
    controllers: [
        'Login'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                xtype: 'login'
            }]
        });
    }
});