import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  boardGame: belongsTo(),
  tag: belongsTo()
});
