var dynamicApp = angular.module('dynamicApp', ['ngStorage']);

dynamicApp.controller('itemCtrl', function($scope, $localStorage) {
  var items = [{
      name: "First item with custom name",
      comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla venenatis enim, vitae finibus lacus.",
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque aliquam sagittis ipsum sed accumsan. Morbi dictum turpis est, nec tristique odio dignissim et.",
      "Vivamus varius tristique purus, suscipit dapibus magna pulvinar vitae. Praesent viverra nisi eu porttitor congue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas commodo orci eu ligula vestibulum, efficitur luctus arcu tristique."]
      },
      {
      name: "Second item",
      comments: ["Vivamus varius tristique purus, suscipit dapibus magna pulvinar vitae. Praesent viverra nisi eu porttitor congue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas commodo orci eu ligula vestibulum, efficitur luctus arcu tristique.",
      "Nullam vulputate velit ligula, eu semper est imperdiet condimentum. Cras efficitur consequat scelerisque. Cras maximus mollis consequat."]
      }];
$scope.$storage = $localStorage.$default({
    items: items
  });
$scope.visibleItems=false;
$scope.visibleComs=false;
$scope.addItem = function () {
  if ($scope.addName!=="") {
  items.push({
  name: $scope.addName,
  comments: []});
  $scope.addName="";
    }
  };
  $scope.deleteItem = function (idx) {
    items.splice(idx, 1);
    $scope.visibleComs=false;
};
$scope.viewComments = function (idx) {
  if ($scope.visibleComs===true && $scope.itemidx==items[idx]){
    $scope.visibleComs=false;
    }  else { $scope.itemidx=items[idx];
            $scope.visibleComs=true;
            }
};
$scope.addComment = function(keyEvent){
  if (keyEvent.which===13 && $scope.newComment!==""){
    items[items.indexOf($scope.itemidx)].comments.push($scope.newComment);
    $scope.newComment="";
  }
};
$localStorage.items=items;
console.log($localStorage.items);
});
