/*Ext.define('GL.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    bgColor: '#DDDDDD',
    //height:1000,
   //html: 'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.Flat is better than nested.Sparse is better than dense. Readability counts. Special cases arent special enough to break the rules. Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess. There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless youre Dutch. Now is better than never. Although never is often better than *right* now. If the implementation is hard to explain, its a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- lets do more of those! '
    layout: 'fit',
    items: [{
        title: 'Hello Ext',
        html : 'Hello! Welcome to Ext JS.'
    }],
    /*items: [{
        xtype: 'panel',
        height: 500,
        width: 500,
        html: 'hello'
    }]
});*/
Ext.define('GL.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">Page Title</h1>',
        border: false,
        margins: '0 0 5 0'
    }, {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 150
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }, {
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150
    }, {
        region: 'center',
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0,      // First tab active by default
        items: {
            title: 'Default Tab',
            html: 'The first tab\'s content. Others may be added dynamically'
        }
    }]
});