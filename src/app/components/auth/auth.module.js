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
  });