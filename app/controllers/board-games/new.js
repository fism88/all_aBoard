import Controller from '@ember/controller';

export default Controller.extend({
  rating: 0,

  actions: {
    setRating (params) {
      this.set('rating', params.rating);
    }
  }
});
