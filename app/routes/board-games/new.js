import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    createBoardGame () {
      let controller = this.get('controller'),
          name = controller.get('name'),
          desc = controller.get('description'),
          rating = controller.get('rating'),
          numPlayers = controller.get('numPlayers');

      var boardGame = this.store.createRecord('board-game', {
        name: name,
        description: desc,
        rating: rating,
        numPlayers: numPlayers,
      });

      if (controller.get('tag')) {
        boardGame.set('tags', controller.get('tag'));
      }

      boardGame.save().then(() => {
        controller.set('name', '');
        controller.set('description', '');
        controller.set('rating', 0);
        controller.set('numPlayers', '');
        controller.set('tag', null);

        this.transitionTo('board-games.board-game', boardGame);
      });
    }
  },

  model () {
    return this.store.findAll('tag');
  }
});
