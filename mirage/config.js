export default function() {
  this.get('/board-games', (schema) => {
    return schema.boardGames.all();
  });

  this.get('/board-games/:id', (schema, request) => {
    return schema.boardGames.find(request.params.id);
  });
}
