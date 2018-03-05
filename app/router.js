import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('board-games', function () {
    this.route('board-game', { path: ':id' }, function () {
      this.route('delete');
    });
    this.route('new');
  });

  this.route('tags', function () {
    this.route('tag', { path: ':id' });
  });
});

export default Router;
