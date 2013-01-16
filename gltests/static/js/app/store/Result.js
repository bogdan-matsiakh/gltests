Ext.define('GL.store.Result', {
    extend: 'Ext.data.Store',
    fields: ['name', 'points'],
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url : '/submit',
      reader: {
        type: 'json',
        root: 'result',
      }
    }
});