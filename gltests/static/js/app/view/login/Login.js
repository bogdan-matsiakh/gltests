Ext.define('GL.view.login.Login',{
	extend: 'Ext.window.Window',
	alias: 'widget.login',
	title: 'Увійти',
	store: 'Registration',
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
	    	 }]
	     }];
	  							          //////////////Buttons Save and Cancel
		 this.buttons = [{
	         html:'<div style="height: 30px; width: 100%; background-color: #23427C; color: #FFFFFF; padding: 8px"> <span style="font-weight: bold; margin: 5px 5px 5px 5px; padding: 5px 5px 5px 5px; text-align: center;"> Залогуватися</span></div>',
	         styleHtmlContent: true,
             padding: 2,
			 action: 'login',
			 name: 'login'
	   	 },{
             text: 'Скасувати',
             action: 'cancel',
             name:'cancel',
             padding: 2,
             height:30,
             scope: this,
	 		 handler: this.close
	  	 }];
	  	 this.callParent(arguments);
	}
});