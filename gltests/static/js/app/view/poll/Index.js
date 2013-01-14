Ext.define('GL.view.poll.Index',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.poll',
    items: [{
    	xtype: 'button',
    	html:'<div style="height: 30px; width: 100%; background-color: #23427C; color: #FFFFFF; padding: 8px"> <span style="font-weight: bold; margin: 5px 5px 5px 5px; padding: 5px 5px 5px 5px; text-align: center;"> Розпочати тест</span></div>',
		styleHtmlContent: true,
		padding: 2,
		action: 'startPoll',
		name: 'startPoll'
    }]
});