export default function() {
  this.get('/board-games', (schema) => {
    return schema.boardGames.all();
  });

  this.get('/board-games/:id', (schema, request) => {
    return schema.boardGames.find(request.params.id);
  });

  this.post('/board-games', (schema, request) => {
    let data = JSON.parse(request.requestBody).data.attributes;
    return schema.boardGames.create(data);
  });

  this.patch('/board-games/:id', (schema, request) => {
    let data = JSON.parse(request.requestBody).data.attributes,
        boardGame = schema.boardGames.find(request.params.id);

    return boardGame.update(data);
  });

  this.del('/board-games/:id', (schema, request) => {
    let boardGame = schema.boardGames.find(request.params.id);
    return boardGame.destroy();
  });

  this.get('/tags', (schema) => {
    return schema.tags.all();
  });

  this.get('/tags/:id', (schema, request) => {
    return schema.tags.find(request.params.id);
  });
}
