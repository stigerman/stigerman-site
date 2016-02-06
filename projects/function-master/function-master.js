 
 function each(collection, action){
     if(Array.isArray(collection)){
         for(var i = 0; i < collection.length; i++){
             action(collection[i], i, collection);
         }
     } else {
         for(var key in collection){
             action(collection[key], key, collection);
         }
     }
     
 }
 
 
 function filter(collection, test){
     var filtered =[];
     each(collection, function(value,position, collection){
         if(test(value, position, collection)){
             filtered.push(value); //what if i put position, or colleciton there instead of value would the each function behave differently?
         }
     })
     return filtered;
 }
 

function objectValues(object) {
   var values = [];
   each(object, function(value) {
       values.push(value);
   });
   return values;
}



 
//   function valuesToString(obj){
//       var results = [];
//      for(var key in obj){
//           if(typeof obj[key] === 'string'){
//               results.push(obj[key]);
//           }
//       }
//       results.join(" ");  
      
//   }
  
  
function valuesToString(obj) {
    var objKeys = Object.keys(obj);
    var vals = [];
    for(var i = 0; i < objKeys.length; i++) {
      var currentKey = objKeys[i];
      var currentValue = obj[currentKey];
      vals.push(obj[currentKey]);
    }
    return vals.join(" ");
}
 

function keysToString(object) {
   return Object.keys(object).join(' ');
}

// valuesToString() : Should take an object and return all its string values in a string each separated with a space


// function valuesToString(object) {
//   var string = '';
//   each(object, function(value) {
//       if (typeof value === 'string') {
//           string = string.concat(value);
//       }
//   }); 
//  }


function arrayOrObject(collection){
    if(Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized (1, 0, 1)Rerun
 function capitalizeWord(string){
    return string[0].toUpperCase() + string.substring(1, string.length);
 }
 
 
 
 //capitalizeAllWords(): Should take a string of words and return a string with all 
//the words capitalized 
//  function capitalizeAllWords(words){
//      var myArr = [];
//       each(words, function(string){
//           myArr.push(capitalizeWord(string));
//       });
//       return myArr;
//  }
 
 function capitalizeAllWords(words) {
    var wordsSplit = words.split(" "); //always returns an array of strings
    var newWords = [];
    for(var i = 0; i < wordsSplit.length; i++){
        var newWord = capitalizeWord(wordsSplit[i]);
        newWords.push(newWord);
    }
    return newWords.join(" ");
}
//  function capitalizeAllWords(words){
//      var myArr = [];
//      var splitWords = words.split(" ");
//       each(splitWords, function(string){
//           myArr.push(capitalizeWord(string));
//       });
//       return myArr;
//  }

 function welcomeMessage(object){
  for(var key in object){
      if(key === 'name'){
         return "Welcome " + capitalizeWord(object.name) + "!";
       }
     }    
 } //checks to see if there is a property called name and if so then we will pass it to the welcome
 
 function welcomeMessage(object){
         return "Welcome " + capitalizeWord(object.name) + "!";
 }
 //profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>
 function profileInfo(object){
    if(object.name.length > 0 && object.species.length > 0){
        return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
    }     
 }
 
 function maybeNoises(obj){
    for(var key in obj){
        if(key === "noises"){
            if(obj.noises.length > 0){
                return obj.noises.join( " ")
                
            } else { 
                return "there are no noises";
        }
      }
    } 
    return "there are no noises";
 }
 
 

 
 function hasWord(sentence, target) {
   var result = false;
   each(sentence.split(" "), function(word) {
       if (word === target) {
           result = true;
       }
   });
   return result;
}




function addFriend(name, obj){
    obj.friends.push(name);
    return obj;
}

function isFriend(name,obj){
    var results= false;
    each(obj.friends, function(friend){
        if(friend === name){
            results = true;
        }
    })
    return results;
}



 function nonFriends (name, list) {
  var nonfriends = []; // this will be the list we return
  for (var i = 0; i < list.length; i++) { //iterate over the parameter
      var friends = list[i].friends; 
      var isFriend = false;
      if (list[i].name !== name) { //if this isn't the person we're testing for
          for (var j = 0; j < friends.length; j++) { //iterate over their friends
              if (friends[j] === name) { //if they have the person as a friend
                  isFriend = true; //record that they have the person as a friend
              } 
          }
          if (!isFriend) nonfriends.push(list[i].name); //after iterating over all their friends, if they didn't have the person as a friend, add them to the list to be returned
      } else {
          isFriend = true; //this else clause isn't doing anything, I just wrote it in hastily and superfluously when I added the logic that a person is a friend of herself.
      }
  }
  return nonfriends;
};

function updateObject(obj, key, value){
    obj[key] = value;
    return obj;
}

// removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are 
// listed in <array>

function removeProperties(object, array){
    for(var i = 0; i < array.length; i++){
        if(object[array[i]]|| object[array[i]] === false){  //removes any array properties if they exist 
            delete object[array[i]];                        //if no properties removes the array
        }                                                   //goes into the object checks if it has array
    }                                                       //if it does deletes the entire property
}



// dedup() : Should take an array and return an array with all the duplicates removed

function dedup(array){
    var deduplicated = [];
       filter(array,function(elem){
           if(deduplicated.indexOf(elem)=== -1){
               deduplicated.push(elem);
           }
       });
    return deduplicated;
}