angular.module('npcapp', ['ui.bootstrap']);


function NpcController($scope, $dialog) {
  
  $scope.npcs = [ 
    {npcName: 'Lucy', hitPoints: 25, health: 32, totalMoves: 0},
    {npcName: 'Kerri', hitPoints: 30, health: 10, totalMoves: 0},
    {npcName: 'Jaden', hitPoints: 20, health: 20, totalMoves: 0},
    {npcName: 'Spodie', hitPoints: 10, health: 30, totalMoves: 0},
    
  ];
  
  var dialogOptions = {
                    controller: 'EditCtrl',
                    templateUrl: 'EditThis.html'
  };

  $scope.edit = function(npc){
    
    var itemToEdit = npc;
    
    $dialog.dialog(angular.extend(dialogOptions, {resolve: {npc: angular.copy(itemToEdit)}}))
      .open()
      .then(function(result) {
        if(result) {
          angular.copy(result, itemToEdit);                
        }
        itemToEdit = undefined;
    });
  };
}
// the dialog is injected in the specified controller
function EditCtrl($scope, npc, dialog){
  
  $scope.npc = npc;
  
  $scope.save = function() {
    dialog.close($scope.npc);  };
  
  $scope.close = function(){
    dialog.close(undefined);
  };
}

