import { test } from 'qunit';
import moduleForAcceptance from 'all-aboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | board-games', {
  afterEach () {
    server.shutdown();
  }
});

test('List board games', function (assert) {
  server.loadFixtures('board-games');

  visit('/board-games');

  andThen(function () {
    assert.equal(find('.board-game-link').length, 2, 'All board game links are rendered');

    assert.equal(find('.board-game-link:contains("Pandemic")').length, 1, 'First board game link contains its name');
    assert.equal(find('.board-game-link:contains("Ticket to Ride")').length, 1, 'Second board game link contains its name');
  });
});

test('View board game details', function (assert) {
  server.loadFixtures('board-games');

  visit('/board-games');
  click('.board-game-link:first-of-type');

  andThen(function () {
    assert.equal(find('.board-game-panel').length, 1, 'Board Game panel loads');
    assert.equal(find('.board-game-panel #board-game-description').length, 1, 'Board game description is shown');
    assert.equal(find('.board-game-panel #board-game-rating').length, 1, 'Board game description is shown');
    assert.equal(find('.board-game-panel #board-game-num-players').length, 1, 'Board game description is shown');
    assert.equal(find('.board-game-panel #board-game-tags').length, 1, 'Board game description is shown');
  });
});

test('Visit specific board game', function (assert) {
  server.loadFixtures('board-games');
});

test('Create a board game', function (assert) {
  server.loadFixtures();

  visit('/board-games');
  click('#new-board-game-button');
});

test('Edit a board game', function (assert) {
  server.loadFixtures();
});

test('Delete a board game', function (assert) {
  server.loadFixtures();
});
