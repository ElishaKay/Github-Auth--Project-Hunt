app.controller('loginController', ['$scope', '$http', '$httpParamSerializer', '$window', function($scope, $http, $httpParamSerializer, $window) {
console.log("in login controller");
  var code = $window.location.toString().replace(/.+code=/, '');
  $window.opener.postMessage(code, $window.location);
  console.log(code);
  $window.close();

}])