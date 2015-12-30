// Router.configure({
//   layoutTemplate: 'layout'
// });

Router.route('/', {
  template: 'mainPage'
});
Router.route('/home');

Router.route('/mainPage');
// Router.route('/mainPage', function() {
//   this.render('mainPage');
// });

Router.route('/words');
Router.route('/setup');
Router.route('/zoom');
