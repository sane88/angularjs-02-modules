(function() {
  "use strinct";

  angular.module("app", ["common", "feature"])
          .config(configApp)
          .run(runApp);

  angular.element(document).ready(function(){
    angular.bootstrap(document, ["app"]);
  });

  function configApp() {
    console.log('configApp');
  }

  function runApp() {
    console.log('runApp');
  }
})()
