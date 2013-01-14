Ext.define('GL.model.Question', {
    extend: 'Ext.data.Model',
    fields: ['text', 'id'],
    

    belongsTo: 'Poll',
    hasMany: {model: 'Choice', name: 'choices'}
});