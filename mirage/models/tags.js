import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  boardGames: hasMany()
});
