Ext.define('Tualo.contenteditable.lazy.models.TestPanel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.lazy_contenteditable_test_panel',
  data: {
    locked: false,
    contenteditable: null,
    record: null
  },
  formulas: {
    title: function (get) {
      var contenteditable = get('contenteditable');
      if (contenteditable) {
        return 'Zahlungen für ' + contenteditable.id + ' (Gesamt: ' + Ext.util.Format.currency(contenteditable.brutto, '€', 2) + ', Offen: ' + Ext.util.Format.currency(contenteditable.offen, '€', 2) + ')';
      }
      return 'Zahlungen';
    },
  }
});
