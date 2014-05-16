angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      controllerAs: 'demo',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($modalInstance, items) {

  var self = this;
  self.items = items;
  self.selected = {
    item: self.items[0]
  };

  self.ok = function () {
    $modalInstance.close(self.selected.item);
  };

  self.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
