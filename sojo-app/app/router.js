import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('login');
  this.route('register');
  this.route('services', function () {
    this.route('maintenance', function () {
      this.route('send');
    });
    this.route('message');
  });
  this.route('bill-pay');
  this.route('calendar');
  this.route('account');
});

export default Router;
