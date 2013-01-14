Ext.define('GL.store.Question', {
    extend: 'Ext.data.Store',
    model: 'GL.model.Question',
    autoLoad: false,
    proxy: {
      type: 'ajax',
      actionMethods:{
        read: 'POST'
      },
      url : '/question/',
      reader: {
        type: 'json',
        root: 'question',
      }
    }
});