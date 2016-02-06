$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  var sortMe = function(a,b){
    if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
};
  // ALL YOUR CODE BELOW HERE //
     var oldRealG =  oldGuardians.sort(sortMe);
     var newRealG = newGuardians.sort(sortMe);
     var sortedG = oldRealG.concat(newRealG).sort(sortMe);
            // var allGs = old.concat(newGuardians).sort(); //Merge the arrays of objects into one array of objects.
     var names = _.pluck(sortedG, 'name');
     var firstNames = _.map(sortedG, function(guardian){ //Use map to make an array of all of the names of your heros.
          return guardian.name.split(" ")[0]; //splits the name of the guardians and selects the first element which would be the first name
      });
      
      function createnamefilter(name){
          var filteredName = [];
              _.each(names, function(guardians){
                  if(guardians === name){
                        filteredName.push(name);
                    }
              })
              return filteredName;
          }
        // var groot = _.filter(allGs, createNameFilter("groot"){
        //   return guardian.name.split(' ')[0].toLowerCase() === "groot";
        // });
    function createTable(data) {
        var $tbl = $('<table/>').addClass('table');
        var $tr = $('<tr/>').appendTo($tbl);
        // create a table header based on the first object's keys //
        _.each(Object.keys(data[0]), function(key) {
          $('<th/>')
            .attr('width', 100)
            .html(key[0].toUpperCase() + key.slice(1))
            .appendTo($tr);
        });
        // for every Object in the Array, create a row with cells containing the Object's data //
        _.each(data, function(object) {
          $tr = $('<tr/>').appendTo($tbl);
          _.each(object, function(value, key){
            $('<td/>')
                .html(value || 'No data available')
                .appendTo($tr);  
          });
        });
        return $tbl;
    }
  
     $('#create').click(function() {
        $('#container').append(createTable(oldRealG));
        $('#container').append(createTable(newRealG));
     });
   
    $('#merge').click(function() {
    $('table').empty();
    $('#container').append(createTable(sortedG).css('class', 'table'));
   });  
   
   
   
   
   
   
      
  // ALL YOUR CODE ABOVE HERE //
});