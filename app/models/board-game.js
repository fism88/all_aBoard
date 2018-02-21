import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  rating: DS.attr('number'),
  numPlayers: DS.attr('string'),
  tags: DS.hasMany('tag')
});
