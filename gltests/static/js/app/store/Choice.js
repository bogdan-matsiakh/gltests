Ext.define('GL.store.Choice', {
    extend: 'Ext.data.Store',
    model: 'GL.model.Choice',
    autoLoad: false,
    proxy: {
      type: 'ajax',
      actionMethods:{
        read: 'POST'
      },
      url : '/choice/',
      reader: {
        type: 'json',
        root: 'choice',
      }
    }
});