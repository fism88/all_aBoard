import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    visitTag: function (tag) {
      this.transitionTo('tags.tag', tag);
    }
  },

  model (params) {
    return this.store.findRecord('board-game', params.id, {include: 'tags'});
  }
});
