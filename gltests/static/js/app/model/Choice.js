Ext.define('GL.model.Choice', {
    extend: 'Ext.data.Model',
    fields: ['id', 'text', 'isCorrect'],
    

    belongsTo: 'Poll',
    hasMany: {model: 'Choice', name: 'choices'}
});