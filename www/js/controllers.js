angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FormigueiroCtrl', function($scope) {

        var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
            swiffyobjectFOR, {  });

        stage.start();

    })

.controller('GirassolCtrl', function($scope) {

    var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
        swiffyobjectGIR, {  });

    stage.start();

})

.controller('MarAzulCtrl', function($scope) {

    var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
        swiffyobjectMAR, {  });

    stage.start();

})

.controller('VermelhoCtrl', function($scope) {

    var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
        swiffyobjectVER, {  });

    stage.start();

})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
