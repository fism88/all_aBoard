export default function() {
  this.get('/board-games', () => {
    //return schema.board_games.all();
    return {
      'data': [
        {
          id: 1,
          type: "board-games",
          attributes: {
            name: 'Pandemic',
            description: '',
            rating: 3,
            "num-players": '2+',
            tags: [
              {
                id: 1,
                type: "tags",
                attributes: {
                  name: 'Strategy'
                }
              },
              {
                id: 2,
                type: "tags",
                attributes: {
                  name: 'Board'
                }
              }
            ]
          }
        },
        {
          id: 2,
          type: "board-games",
          attributes: {
            name: 'Ticket to Ride',
            description: '',
            rating: 5,
            "num-players": '2+',
            tags: [
              {
                id: 2,
                type: "tags",
                attributes: {
                  name: 'Board'
                }
              },
              {
                id: 1,
                type: "tags",
                attributes: {
                  name: 'Strategy'
                }
              }
            ]
          }
        }
      ]
    };
  });
}
