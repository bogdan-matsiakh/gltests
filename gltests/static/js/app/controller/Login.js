Ext.define('GL.controller.Login', {
    extend: 'Ext.app.Controller',
    
    views: ['login.Login', 'user.List'],
    
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});
