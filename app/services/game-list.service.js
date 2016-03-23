

(function() {
  'use strict';
  angular
    .module('gl.core')
    .factory('dataService', dataService);

    dataservice.$inject = ["$http"];

    function dataService(){


      return {
        getGamesList: getGamesList,
        updateGamesList: updateGamesList
      };

      function getGamesList(){
        return db.get('games-list')
          .then(getGameListComplete);

        function getGameListComplete(response){
          return response;
        }
      }

      function updateGamesList(){
        fs.readdir("D:/SteamLibrary/steamapps/common", function(err, files){
          files.forEach(function(file){
            var file = {
              title: file,
              path: walkExe("D:/SteamLibrary/steamapps/common/" + file)
            };

            db.put(file);
          })
        })

      }
    }
})
