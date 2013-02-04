Ext.define("GL.view.poll.Question", {
    extend: 'Ext.form.Panel',
    alias: 'widget.question',
    id: 'question',
    title: 'Question',
    height: 100,
    columns: 2,
    items:[{
        xtype: 'checkboxgroup',
        fieldLabel: 'Two Columns',
        columns: 2,
        // Arrange radio buttons into two columns, distributed vertically
       /* items: [
            { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
            { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true },
            { boxLabel: 'Item 3', name: 'rb', inputValue: '3' },
            { boxLabel: 'Item 4', name: 'rb', inputValue: '4' },
            { boxLabel: 'Item 5', name: 'rb', inputValue: '5' },
            { boxLabel: 'Item 6', name: 'rb', inputValue: '6' }
        ]
        */
    }]
});