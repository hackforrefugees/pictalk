// Router.configure({
//   layoutTemplate: 'layout'
// });

Router.route('/', {
  template: 'index'
});
Router.route('/home');

Router.route('/mainPage');
// Router.route('/mainPage', function() {
//   this.render('mainPage');
// });

Router.route('/words');
Router.route('/setup');
