Ext.define('Tualo.contenteditable.lazy.TestPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.lazy_contenteditable_test_panel',
  requires: [
    'Ext.form.Panel',
    'Tualo.contenteditable.lazy.models.TestPanel',
    'Tualo.contenteditable.lazy.controller.TestPanel'
  ],
  config: {
    type: null,
    contenteditablenumber: null
  },
  controller: 'lazy_contenteditable_test_panel',
  viewModel: {
    type: 'lazy_contenteditable_test_panel'
  },
  listeners: {
    boxReady: 'onBoxReady'
  },
  layout: {
    type: 'fit'
  },
  bind: {
    title: '{title}'
  },
  items: [
    {
      xtype: 'panel',
      itemId: 'testdata',
      html: 'Testdaten für Contenteditable: <br> <pre>{contenteditable}</pre>'

    }
  ],

})
