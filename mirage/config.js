export default function() {
  this.get('/board-games', (schema) => {
    return schema.boardGames.all();
  });
}
