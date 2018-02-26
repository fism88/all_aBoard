import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  boardGames: DS.hasMany('board-game')
});
