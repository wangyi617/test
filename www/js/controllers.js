angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $ionicPopup) {
  $scope.checkUpdate =  function() {
    // cordova.getAppVersion.getVersionNumber(function (versionNumber) {
      var url="https://api.github.com/repos/wangyi617/test/releases/latest";
      $http.get(url).success(function (data) {
        // if (versionNumber < data.versionNumber) {
        //   var confirmPopup = $ionicPopup.confirm({
        //     title: "有新版本升级了",
        //     template: data.msg,
        //     cancelText: "取消",
        //     okText: "升级"
        //   });
        //   confirmPopup.then(function (res) {
        //     if (res) {
        //       window.open(data.apk, '_system', 'location=yes');
        //     } else {
        //     }
        //   })
        // }
        consolo.log(data);
      })
      // .error(function (error) {
      //     Toast.show("对不起更新失败")
      // })
    // });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
