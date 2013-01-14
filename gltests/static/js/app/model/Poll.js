Ext.define('GL.model.Poll', {
    extend: 'Ext.data.Model',
    fields: ['title', 'id'],
    

    hasMany: ['Question', {model: 'Question', name: 'questions'}]
});