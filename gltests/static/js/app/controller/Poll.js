Ext.define('GL.controller.Poll', {
    extend: 'Ext.app.Controller',
    
    views: ['poll.Index'],
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
                
                '<tpl for="choices">',
                    '<div class="choice">',
                        '<label for={text}>{text}</label>',
                        '<input type="checkbox" name={text}/>',
                    '</div>',
                '</tpl>',
            '</tpl>'
        );
        content.removeAll();
        ctpl.overwrite(content.body, data);
        content.add({
            xtype: 'button',
            text: 'Відповісти',
            handler: function () {
                self.startPoll(id + 1);
            }
        });
        console.log('end')
    }
});
