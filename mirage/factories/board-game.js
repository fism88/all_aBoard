import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name (i) {
    return `Game ${i}`;
  },
  description: 'Card game based on matching value or color of cards.',
  rating: 3,
  numPlayers: '2+',
});
