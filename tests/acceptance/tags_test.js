import { test } from 'qunit';
import moduleForAcceptance from 'all-aboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags', {
  afterEach () {
    server.shutdown();
  }
});

test('List tags', function (assert) {
  server.loadFixtures('board-games', 'tags');

  visit('/tags');

  andThen(function () {
    assert.equal(find('.tag-link').length, 2, 'All tag links are rendered');
    assert.equal(find('.tag-link:contains("Strategy")').length, 1, 'First tag link contains its name');
    assert.equal(find('.tag-link:contains("Board")').length, 1, 'Second tag link contains its name');
  });
});

test('Visit tag from board game', function (assert) {
  server.loadFixtures('board-games', 'tags');

  visit('/board-games/1');
  click('.board-game-panel .tag-button:first-of-type');

  andThen(function () {
    assert.equal(currentURL(), '/tags/1');
    assert.equal(find('.tag-panel').length, 1, 'Tag panel loads');
    assert.equal(find('.tag-panel #tag-heading').length, 1, 'Tag heading is shown');
    assert.equal(find('.tag-panel #tag-board-games').length, 1, 'Tagged board games seciton is shown');
    assert.equal(find('.tag-panel .board-game-link').length, 2, 'Links to board games with tag are shown');
  });
});

test('View tag details', function (assert) {
  server.loadFixtures('board-games', 'tags');

  visit('/tags');
  click('.tag-link:first-of-type');

  andThen(function () {
    assert.equal(currentURL(), '/tags/1');
    assert.equal(find('.tag-panel').length, 1, 'Tag panel loads');
    assert.equal(find('.tag-panel #tag-heading').length, 1, 'Tag heading is shown');
    assert.equal(find('.tag-panel #tag-board-games').length, 1, 'Tag board games section is shown');
    assert.equal(find('.tag-panel .board-game-link').length, 2, 'Links to board games with tag are shown');
  });
});
