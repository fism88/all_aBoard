import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    deleteBoardGame (boardGame) {
      boardGame.destroyRecord();
      this.transitionTo('board-games');
    },

    willTransition () {
      this.controllerFor('board-games.board-game').set('isDeleting', false);
    }
  },

  model () {
    return this.modelFor('board-games.board-game');
  }
});
