import Controller from '@ember/controller';

export default Controller.extend({
  isEditing: false,
  rating: 0,

  actions: {
    activateEditing (boardGame) {
      this.set('isEditing', true);
      this.set('rating', boardGame.get('rating'));
      this.set('tagsList', this.store.findAll('tag'));
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
