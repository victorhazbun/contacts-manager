function AuthService($firebaseAuth) {
  var auth = $firebaseAuth();
  var authData = null;

  function storeAuthData(response) {
    authData = response;
    return authData;
  }

  function onSignIn(user) {
    authData = user;
    return auth.$requireSignIn();
  }

  function clearAuthData() {
    authData = null;
  }

  this.login = function(user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };

  this.register = function(user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };

  this.requireAuthentication = function() {
    return auth
      .$awaitForSignIn().then(onSignIn);
  };

  this.isAuthenticated = function() {
    return !!authData; // null || user
  };

  this.getUser = function() {
    if (authData) {
      return authData;
    }
  };

  this.logout = function() {
    return auth
      .$signOut()
      .then(clearAuthData);
  };
};

angular
  .module('components.auth')
  .service('AuthService', AuthService);