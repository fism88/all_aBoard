import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    editBoardGame (boardGame) {
      let controller = this.get('controller');

      if (controller.get('name')) {
        boardGame.set('name', this.controller.get('name'));
      }

      if (controller.get('description')) {
        boardGame.set('description', this.controller.get('description'));
      }

      if (controller.get('numPlayers')) {
        boardGame.set('numPlayers', this.controller.get('numPlayers'));
      }

      if (controller.get('rating') !== boardGame.get('rating')) {
        boardGame.set('rating', controller.get('rating'));
      }

      boardGame.save();
      controller.set('isEditing', false);
      controller.set('name', undefined);
      controller.set('description', undefined);
      controller.set('numPlayers', undefined);
      this.transitionTo('board-games.board-game', boardGame);
    },

    willTransition (transition) {
      let controller = this.get('controller');

      if (controller.get('isEditing')) {
        //let leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        let leave = true;
        if (leave) {
          controller.set('isEditing', false);
          // TODO reset all controller board game fields here
          controller.set('name', undefined);
          controller.set('description', undefined);
          controller.set('numPlayers', undefined);
        }
        else {
          transition.abort();
        }
      }
    },

    visitTag (tag) {
      this.transitionTo('tags.tag', tag);
    }
  },

  model (params) {
    return this.store.findRecord('board-game', params.id, {include: 'tags'});
  }
});
