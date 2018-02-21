export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.get('/board_games', () => {
    return [
      {
        id: 1,
        attributes: {
          name: 'Uno',
          description: 'Card game based on matching value or color of cards',
          rating: 3,
          numPlayers: '2+',
          tags: [
            {
              id: 1,
              attributes: {
                'name': 'Cards'
              }
            },
            {
              id: 2,
              attributes: {
                'name': 'Quick'
              }
            }
          ]
        }
      }
    ]
  });
}
