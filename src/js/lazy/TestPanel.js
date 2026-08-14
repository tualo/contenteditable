Ext.define('Tualo.contenteditable.lazy.TestPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.lazy_contenteditable_test_panel',
  requires: [
    'Ext.form.Panel',
    'Tualo.contenteditable.lazy.models.TestPanel',
    'Tualo.contenteditable.lazy.controller.TestPanel'
  ],

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
  tbar: [
    {
      xtype: 'button',
      text: 'B',
      handler: 'onBoldClick'
    },
    {
      xtype: 'button',
      text: 'I',
      handler: 'onItalicClick'
    },
    {
      xtype: 'button',
      text: 'Color Orange',
      handler: 'onOrangeColorClick'
    },
    {
      xtype: 'button',
      text: 'Clear',
      handler: 'onClearClick'
    }
  ],
  items: [
    {
      xtype: 'panel',
      itemId: 'testdata',
      bind: {
        html: '{html}'
      }

    }
  ],

})
