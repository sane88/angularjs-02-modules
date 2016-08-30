(function() {
  "use strinct";

  angular.module("feature")
          .service("days", days);


    function days(nowValue) {
      // this.today = new Date().getDay();
      // this.tomorrow = (new Date().getDay() + 1) % 7;
      this.today = nowValue.getDay();
      this.tomorrow = (this.today + 1) % 7;
    }
})()
