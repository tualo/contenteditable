Ext.define('Tualo.contenteditable.lazy.controller.TestPanel', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.lazy_contenteditable_test_panel',
  onBoxReady: function () {
    var me = this;
    var vm = me.getViewModel();
    var view = me.getView();
    var contenteditable = view.contenteditablenumber;
    vm.set('contenteditable', contenteditable);
  },
  onBoldClick: function () {
    var me = this;
    var view = me.getView();
    var contenteditable = view.down('#testdata').getEl().dom.querySelector('[contenteditable="true"]');
    if (contenteditable) {
      document.execCommand('bold', false, null);
    }
  },
  onItalicClick: function () {
    var me = this;
    var view = me.getView();
    var contenteditable = view.down('#testdata').getEl().dom.querySelector('[contenteditable="true"]');
    if (contenteditable) {
      document.execCommand('italic', false, null);
    }
  },
  onOrangeColorClick: function () {
    var me = this;
    var view = me.getView();
    var contenteditable = view.down('#testdata').getEl().dom.querySelector('[contenteditable="true"]');
    if (contenteditable) {
      document.execCommand('foreColor', false, 'orange');
    }
  },
  onClearClick: function () {
    var me = this;
    var view = me.getView();
    var contenteditable = view.down('#testdata').getEl().dom.querySelector('[contenteditable="true"]');
    if (contenteditable) {
      document.execCommand('removeFormat', false, null);
    }
  }

});
