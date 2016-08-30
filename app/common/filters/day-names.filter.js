(function() {
  "use strinct";

  angular.module("filter",[])
          .filter("dayNames", dayNames);


    function dayNames() {
      let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return function(input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
  }
})()
