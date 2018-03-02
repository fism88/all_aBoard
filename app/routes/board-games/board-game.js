import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    visitTag: function (tag) {
      this.transitionTo('tags.tag', tag);
    }
  },

  model (params) {
    return Ember.RSVP.hash({
      boardGame: this.store.findRecord('board-game', params.id, {include: 'tags'}),
      tags: this.store.findAll('tag')
    });
  }
});
