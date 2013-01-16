Ext.define('GL.view.login.Login',{
	extend: 'Ext.window.Window',
	alias: 'widget.login',
	title: 'Увійти',
	layout: 'fit',
    resizable: false,
    modal: true,
    closable: false,
    cls:'window',
    id:'loginWindow',
    initComponent: function(){
	     this.items = [{
    	     xtype:'form',
    	     id:'login',
             cls:'window-form',
             bodyStyle: 'padding: 17px;',
    	     defaults: {width: 190,height:25},
		     items:[{
	    		 xtype: 'label',
		    	 text: 'Ваше імя',
		    	 region: 'center'
	         },{
				 xtype: 'textfield',
				 name : 'username',
				 allowBlank:false,
            	 blankText:'Введіть свіє імя',
                 emptyText:'Введіть своє імя',
                 enableKeyEvents: true
	    	 }]
	     }];
	  							          
		 this.buttons = [{
	         html:'<div class="active-button"><span class="span"> Вперед!</span></div>',
	         styleHtmlContent: true,
             padding: 2,
			 action: 'login',
			 name: 'login'
	   	 }];
	  	 this.callParent(arguments);
	}
});