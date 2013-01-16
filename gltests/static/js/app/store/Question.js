Ext.define('GL.store.Question', {
    extend: 'Ext.data.Store',
    model: 'GL.model.Question',
    data : [{
        text: 'Who is Ed?',
        img: [{
            src: 'http://www.nasa.gov/images/content/706436main_20121114-304-193Blend_M6-orig_full.jpg'
        },{
            src: 'http://www.nasa.gov/images/content/706436main_20121114-304-193Blend_M6-orig_full.jpg'
        }],
        good: 'good boy',
        wrong: 'bad boy',   
        choices: [{
            text: 'Spencer',
            isCorrect: false,
            
        },{
            text: 'some',
            isCorrect: true,
        },{
            text: 'Spencer',
            isCorrect: false
        }]
    },{
        text: 'Ed',
        img: false,
        good: 'good boy',
        wrong: 'bad boy',
        choices: [{
            text: 'Spencer',
            isCorrect: true
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