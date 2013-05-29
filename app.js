var CanTabs = can.Control({
  init: function() {
    var self = this;

    // activate the first tab
    this.element.find('li:first').addClass('active');

    // hide the other tabs
    this.element.find('li:gt(0)').each(function() {
      self.tab($(this)).hide();
    });
  },

  // helper function finds the tab for a given li
  tab: function(li) {
    return this.element.find('.tab:eq(' + li.index() + ')');
  },

  // hides old active tab, shows new one
  'li click': function(el, ev) {
    ev.preventDefault();
    this.tab(this.element.find('.active').removeClass('active')).hide();
    this.tab(el.addClass('active')).show();
  }
});

new CanTabs(".tabs");
