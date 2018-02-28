import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    newBoardGame () {
      this.transitionTo('board-games.new');
    }
  },

  model () {
    return this.store.findAll('board-game', {include: 'tags'});
  },
});
