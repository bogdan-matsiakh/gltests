Ext.define('GL.controller.Poll', {
    extend: 'Ext.app.Controller',
    
    views: ['poll.Index', 'poll.Question'],
    models: ['Poll', 'Question', 'Choice'],
    stores: ['Question'],
    
    init: function() {
        this.control({
            'poll': {
                render: function () {
                   // this.startPoll(0);
                } 
            },
            'poll button[action = startPoll]': {
            	click: function() {
            	    this.startPoll(0)
            	} 
            }
        });
    },
    
    startPoll: function (id) {
        console.log('success start poll');
        var self = this;
        var content = Ext.getCmp('content');
        var store = Ext.getStore('Question');
        var data = store.data.get(id).data;
        var ctpl = new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="question">{text}</div>',

                '<tpl if="img != false">',
                    '<tpl for="img">',
                        '<div>',
                            '<img class="image" src={src} />',
                        '</div>',
                    '</tpl>',
                    
                '</tpl>',
                
                '<br/><tpl for="choices">',
                    '<div class="choice">',
                        '<label class="label" for={text}>{text}</label>',
                        '<input class="answer" type="checkbox" name={text}/>',
                    '</div>',
                '</tpl>',
            '</tpl>'
        );
        content.removeAll();
        ctpl.overwrite(content.body, data);
        content.add({
            xtype: 'button',
	    	html:'<div class="active-button next"><span class="span"> Наступне</span></div>',
			styleHtmlContent: true,
			style: {
				position: 'relative',
				top: 200,
				left: 200
			},
			padding: 2,
            handler: function () {
	            self.submitAnswer(id);
            } 
        });
        content.add({
           // xtype: 'question'
        });
        /*
        var question = Ext.getCmp("question");
        var checkboxes = question.down('checkboxgroup');
        checkboxes.fieldLabel = data.text;
        say(checkboxes);
        for (var i=0; i < data.choices.length; i++) {
            checkboxes.add({ 
                boxLabel: data.choices[i].text, 
                border: 30,
                
                name: 'rb', 
                inputValue: '1' 
            });
          
        };
        */
        content.title = 'Тест';
    },
    
    submitAnswer: function (id) {
    	var choices = document.getElementsByClassName('choice');
    	var store = Ext.getStore('Question');
        var data = store.data.get(id).data;
    	var trueAnswer = '';
    	var answer = '';
    	var right = false;
    	
    	for (var i = 0; i < data.choices.length; i++) {
			if (data.choices[i].isCorrect) {
				trueAnswer = data.choices[i].text; 
			}
		};
    	for (var i = 0; i < choices.length; i++) {
			var checkbox = choices[i].getElementsByClassName('answer')[0];
			if (checkbox.checked) {
				answer = checkbox.name;
			}
		};
    	say(answer == trueAnswer ? data.good : data.wrong);
    	Ext.Ajax.request({
            url : '/submit',
            method: 'POST', 
            params: {
                right: answer == trueAnswer ? 1 : 0
            },            
    	})
    	id + 1 < store.data.getCount() ? this.startPoll(id + 1) : this.endPoll();
    },
    
    endPoll: function () {
    	say('end poll');
    }
});
