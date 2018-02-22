import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log("PARAMS");
    console.log(params);
    return this.store.findRecord('board-game', params.id);
  }
});
