var contactNew = {
  templateUrl: './contact-new.html',
  controller: 'ContactNewController'
};

angular
  .module('components.contact')
  .component('contactNew', contactNew)
  .config(function($stateProvider) {
    $stateProvider
      .state('new', {
        parent: 'app', // inherits from app component
        url: '/new',
        component: 'contactNew'
      });
  });