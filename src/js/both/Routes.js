
Ext.define('Tualo.routes.Contenteditable', {
    statics: {
        load: async function () {
            return [
                {
                    name: 'contenteditable',
                    path: '#contenteditable'
                }
            ]
        }
    },
    url: 'contenteditable',
    handler: {
        action: function (token) {
            Ext.getApplication().addView('Tualo.contenteditable.lazy.TestPanel', {
            });
        },
        before: function (action) {
            console.log('onBeforeToken', action);
            console.log(new Date());
            action.resume();
        }
    }
});
