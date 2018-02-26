export default function() {
  this.get('/board-games', (schema) => {
    return schema.boardGames.all();
  });

  this.get('/board-games/:id', (schema, request) => {
    return schema.boardGames.find(request.params.id);
  });

  this.get('/tags', (schema) => {
    return schema.tags.all();
  });

  this.get('/tags/:id', (schema, request) => {
    return schema.tags.find(request.params.id);
  });
}
