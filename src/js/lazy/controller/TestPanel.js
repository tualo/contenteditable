Ext.define('Tualo.contenteditable.lazy.controller.TestPanel', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.lazy_contenteditable_test_panel',
  onBoxReady: function () {
    var me = this;
    var vm = me.getViewModel();
    var view = me.getView();
    var contenteditable = view.contenteditablenumber;
    vm.set('contenteditable', contenteditable);
  }

});
