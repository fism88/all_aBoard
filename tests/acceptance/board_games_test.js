import { test } from 'qunit';
import moduleForAcceptance from 'all-aboard/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | board-games');

test('List board games', function (assert) {
  visit('/board-games');

  andThen(function () {
    assert.equal(find('.board-game-link').length, 2, 'All board game links are rendered');

    assert.equal(find('.board-game-link:contains("Pandemic")').length, 1, 'First board game link contains its name');
    assert.equal(find('.board-game-link:contains("Ticket to Ride")').length, 1, 'Second board game link contains its name');
  });
});
