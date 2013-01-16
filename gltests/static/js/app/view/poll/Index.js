Ext.define('GL.view.poll.Index',{
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    title: 'Тест',
    alias: 'widget.poll',
    
    items: [{
    	xtype: 'button',
    	html:'<div class="active-button"><span class="span"> Розпочати тест</span></div>',
		styleHtmlContent: true,
		padding: 2,
		action: 'startPoll',
		name: 'startPoll'
    }]
});