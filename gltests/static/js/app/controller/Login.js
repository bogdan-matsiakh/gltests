Ext.define('GL.controller.Login', {
    extend: 'Ext.app.Controller',
    
    views: ['login.Login', 'user.List'],
    
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
    
    successLogin: function (p,a) {
       console.log('success');
       console.log(p);
       console.log(a); 
    },
    
    failureLogin: function (p,a) {
       console.log('failure');
       console.log(p);
       console.log(a); 
    },
});
