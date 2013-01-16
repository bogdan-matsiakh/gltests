Ext.define('GL.controller.Login', {
    extend: 'Ext.app.Controller',
    
    views: ['page.Content', 'login.Login', 'user.List'],
    
    init: function() {
        this.control({
            'viewport': {
                render: this.onPanelRendered
            },
            'login button[action = login]': {
                click: this.login
            },
        });
    },

    onPanelRendered: function() {
    	var content = Ext.getCmp('content'); //get 'content' view by id        
        
        content.removeAll();
        content.add({
    		xtype: 'login'
        });
        
        var win = Ext.create('GL.view.login.Login');
        win.show();
    },
    
    login: function() {
        var login = Ext.getCmp('login');
        var form = login.getForm();
        if (form.isValid()) {
            var values = form.getValues();
            Ext.Ajax.request({
                url : '/login',
                method: 'POST', 
                params: {
                    name: values.username
                },            
                success: this.successLogin,
                failure: this.failureLogin
            });                    
        }
    },
    
    successLogin: function (response, request) {
        console.log('success');
        var result = JSON.parse(response.responseText);
        var content = Ext.getCmp('content');        
        var win = Ext.getCmp('loginWindow');
        win.close();
        
        content.removeAll();
        content.add({
			xtype: 'poll',
			title: 'Hello, ' + result.name 
        });
        
    },
    
    failureLogin: function (p,a) {
       console.log('failure');
    },
});
