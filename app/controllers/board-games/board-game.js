import Controller from '@ember/controller';

export default Controller.extend({
  isDeleting: false,
  isEditing: false,
  rating: 0,

  actions: {
    activateEditing (boardGame) {
      this.set('isEditing', true);
      this.set('rating', boardGame.get('rating'));
      this.set('tagsList', this.store.findAll('tag'));
      this.set('tag', boardGame.get('tags'));
    },

    updateRating (params) {
      let rating = params.rating;

      if (this.get('rating') === rating) {
        rating = 0;
      }

      this.set('rating', rating);
    }
  }
});
