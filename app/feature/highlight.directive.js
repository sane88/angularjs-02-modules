(function() {
  "use strinct";

  angular.module("feature")
          .directive("highlight", highlight);

    function highlight($filter) {
      return{
        link: function(scope, element, attrs){
          let value = scope.$ctrl.day;
          let dayFilter = $filter("dayNames");

          if(dayFilter(value) === attrs["highlight"]){
            element.css("color", "red");
          }
        }
      }
    }
})()
