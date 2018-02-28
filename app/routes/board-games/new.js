import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    createBoardGame () {
      let controller = this.get('controller');
      let name = controller.get('name');
      let desc = controller.get('description');
      let rating = controller.get('rating');
      let numPlayers = controller.get('numPlayers');
      var boardGame = this.store.createRecord('board-game', {
        name: name,
        description: desc,
        rating: rating,
        numPlayers: numPlayers
      });

      boardGame.save().then(() => {
        this.transitionTo('board-games.board-game', boardGame);
      });
    }
  },

  model () {
    return this.store.findAll('tag');
  }
});
