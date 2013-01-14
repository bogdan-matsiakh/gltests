Ext.define('GL.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    layout: 'fit',
    items: [{
        xtype: 'content',
        autoScroll: true
    }]
});
