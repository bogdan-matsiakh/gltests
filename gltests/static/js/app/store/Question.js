Ext.define('GL.store.Question', {
    extend: 'Ext.data.Store',
    model: 'GL.model.Question',
    data : [{
        text: 'Who is Ed?',   
        choices: [{
            text: 'Spencer',
            isCorrect: false
        },{
            text: 'Spencer',
            isCorrect: false
        },{
            text: 'Spencer',
            isCorrect: false
        }]
    },{
        text: 'Ed',   
        choices: [{
            text: 'Spencer',
            isCorrect: false
        },{
            text: 'Spencer',
            isCorrect: false
        },{
            text: 'Spencer',
            isCorrect: false
        },{
            text: 'Spencer',
            isCorrect: false
        }]
    }]
});