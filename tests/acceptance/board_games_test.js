import { test } from 'qunit';
import moduleForAcceptance from 'all-aboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | board-games', {
  afterEach () {
    server.shutdown();
  }
});

test('List board games', function (assert) {
  server.loadFixtures('board-games', 'tags');

  visit('/board-games');

  andThen(function () {
    assert.equal(find('.board-game-link').length, 2, 'All board game links are rendered');

    assert.equal(find('.board-game-link:contains("Pandemic")').length, 1, 'First board game link contains its name');
    assert.equal(find('.board-game-link:contains("Ticket to Ride")').length, 1, 'Second board game link contains its name');
  });
});

test('View board game details', function (assert) {
  server.loadFixtures('board-games', 'tags');

  visit('/board-games');
  click('.board-game-link:first-of-type');

  andThen(function () {
    assert.equal(currentURL(), '/board-games/1');
    assert.equal(find('.board-game-panel').length, 1, 'Board Game panel loads');
    assert.equal(find('.board-game-panel #board-game-heading').length, 1, 'Board game heading is shown');
    assert.equal(find('.board-game-panel #board-game-description').length, 1, 'Board game description is shown');
    assert.equal(find('.board-game-panel #board-game-rating').length, 1, 'Board game rating is shown');
    assert.equal(find('.board-game-panel #board-game-num-players').length, 1, 'Board game number of players is shown');
    assert.equal(find('.board-game-panel #board-game-tags').length, 1, 'Board game tags section is shown');
  });
});

test('Visit specific board game', function (assert) {
  server.loadFixtures('board-games', 'tags');

  visit('/board-games/1');

  andThen(function () {
    assert.equal(find('.board-game-panel').length, 1, 'Board Game panel loads');
    assert.equal(find('.board-game-panel #board-game-heading:contains("Pandemic")').length, 1, 'Board game heading contains name');
    assert.equal(find('.board-game-panel #board-game-description').length, 1, 'Board game description is shown');
    assert.equal(find('.board-game-panel #board-game-rating').length, 1, 'Board game rating is shown');
    assert.equal(find('.board-game-panel #board-game-num-players').length, 1, 'Board game number of players is shown');
    assert.equal(find('.board-game-panel #board-game-tags').length, 1, 'Board game tags section is shown');

    assert.equal(find('.board-game-panel .tag-button').length, 2, 'Board game has tags listed');
  });
});

test('Create a board game', function (assert) {
  server.loadFixtures();

  let name = 'Dixit',
      desc = 'One person describes a picture card they have, while others then put down a picture card that others would think matches the description',
      numPlayers = '3+',
      tag1 = 'Strategy',
      tag2 = 'Board';

  visit('/board-games');
  click('#new-board-game-button');

  fillIn('#new-board-game-name', name);
  fillIn('#new-board-game-desc', desc);
  click('.rating-panel .star-rating:nth-child(4)');
  fillIn('#new-board-game-num-players', numPlayers);
  fillIn('.ember-power-select-trigger-multiple-input', tag1);
  click('.ember-power-select-option');
  fillIn('.ember-power-select-trigger-multiple-input', tag2);
  click('.ember-power-select-option');

  click('#create-board-game-button');

  andThen(function () {
    assert.equal(currentURL(), '/board-games/3');
    assert.equal(find('.board-game-link:contains("Dixit")').length, 1, 'New board game was created and shows up in list');
    assert.equal(find('#board-game-heading:contains("Dixit")').length, 1, 'New board game name was set');
    assert.equal(find('#board-game-description:contains("' + desc +'")').length, 1, 'New board game description was set');
    assert.equal(find('#board-game-num-players:contains("3+")').length, 1, 'New board game number of players was set');
    assert.equal(find('#board-game-rating .glyphicon-star').length, 4, 'New board game rating was set');
    assert.equal(find('.tag-button:contains("Strategy")').length, 1, 'Strategy tag added to new board game');
    assert.equal(find('.tag-button:contains("Board")').length, 1, 'Board tag added to new board game');
  });
});

test('Edit a board game', function (assert) {
  server.loadFixtures();

  let name = 'Dixit',
      desc = 'One person describes a picture card they have, while others then put down a picture card that others would think matches the description',
      numPlayers = '3+',
      tag = 'Strategy';

  visit('/board-games/1');
  click('#edit-board-game-link');

  fillIn('#edit-board-game-name', name);
  fillIn('#edit-board-game-desc', desc);
  click('.rating-panel .star-rating:nth-child(4)');
  fillIn('#edit-board-game-num-players', numPlayers);
  click('.ember-power-select-multiple-remove-btn');
  click('.ember-power-select-multiple-remove-btn');
  fillIn('.ember-power-select-trigger-multiple-input', tag);
  click('.ember-power-select-option');

  click('#edit-board-game-button');

  andThen(function () {
    assert.equal(currentURL(), '/board-games/1');
    assert.equal(find('.board-game-link:contains("Dixit")').length, 1, 'Board game was edited and shows up in list');
    assert.equal(find('#board-game-heading:contains("Dixit")').length, 1, 'Board game name was edited');
    assert.equal(find('#board-game-description:contains("' + desc +'")').length, 1, 'Board game description was edited');
    assert.equal(find('#board-game-num-players:contains("3+")').length, 1, 'Board game number of players was edited');
    assert.equal(find('#board-game-rating .glyphicon-star').length, 4, 'Board game rating was edited');
    assert.equal(find('.tag-button:contains("Strategy")').length, 1, 'Strategy tag set for board game');
    assert.equal(find('.tag-button').length, 1, 'Other tag(s) were removed from edited board game');
  });
});

test('Delete a board game', function (assert) {
  server.loadFixtures();

  visit('/board-games/2');
  click('#delete-board-game-link');
  click('#confirm-delete-button');

  andThen(function () {
    assert.equal(currentURL(), '/board-games');
    assert.equal(find('.board-game-link:contains("Ticket to Ride")').length, 0, 'Board game was deleted');
  });
});
