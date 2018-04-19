angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    var config = {
      apiKey: "AIzaSyB0Ho4tI2NEFS3-0WmK-f_pxduJ4bgSsLc",
      authDomain: "contacts-manager-2d5ec.firebaseapp.com",
      databaseURL: "https://contacts-manager-2d5ec.firebaseio.com",
      projectId: "contacts-manager-2d5ec",
      storageBucket: "contacts-manager-2d5ec.appspot.com",
      messagingSenderId: "186915116846"
    };
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts',
      })
    firebase.initializeApp(config);
  })
  .run(function($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requireAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function() {
          return $state.target('auth.login');
        });
    });

    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });