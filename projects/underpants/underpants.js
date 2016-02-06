// This is the proper way to start a javascript library
(function() {
  
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window ._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of: 
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(Array.isArray(value)){
        return "array";
    } else if(value === null){
        return "null";
    } else {
        return typeof value;
    }
}

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/



_.first = function (array, n){
         n = n || 1;
         if(n < 1 || !Array.isArray(array)) return [];
      return  n > 1 ?  array.slice(0,n) : array[0]; 
     };

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/


_.last = function(arr, number) {
   if (!Array.isArray(arr)) {
       return [];
   } else if (!number) {
       return arr[arr.length - 1];
   } else if (number > arr.length) {
       return arr;
   } else {
       return arr.splice(arr.length - number, number);
   }
};
/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments: 
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
*      -> should log "a" "b" "c" to the console
*/
_. each = function(collection, action){
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


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


_.indexOf = function(array, value){
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;  //returns -1 if there is no index
};


function indexOfEach(array, target){ // target is what we are searching for
    var index = -1;
    _.each(array, function(value, i){ //value is what we are getting one at a time
        if (value === target) {index = i;} //this does  not return unless its added to another state
    })
} //returns the last instance of the index if there are duplicates 

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(collection, test){
    var filtered = [];
    _.each(collection, function(value, position, collection){ //each passes the value position and collection and the anonymous function takes them as parameters to pass into the test 
        if(test(value,position,collection)) { filtered.push(value); }  //if test returns a boolean of true it will push the value to filtered
    });
    return filtered;
};





/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, test){
    var rejected = [];
  _.filter(array, function(value,position,array){
      if(!test(value, position, array)){
          rejected.push(value);
      }
  });
  return rejected;
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array,test){
    var partitioned = []; //create empty array container
    var arrayOne = []; //truthy values array
    var arrayTwo = []; //falsy values array
    _.each(array, function(element, key, value){
        if(test(element, key, value)){
           arrayOne.push(element);    //if truthy push to truthyArray
        } else {
            arrayTwo.push(element);  //otherwise push to falsyArray
        }
    });
     partitioned.push(arrayOne, arrayTwo);  //finally push both arrays to the partitioned array
     return partitioned;
};
//you know index of returns an inde or -1, if it returns negative one that means the array value is not within the new array
//if its not in the array we can pass the value that we are iterating over to the new array
//otherwise it will return the index within the newArr 
_.unique = function(array){
    var newArr = [];
    for(var i = 0; i < array.length; i++){ //
         if(_.indexOf(newArr,array[i]) === -1){    //array[i] is target newArr is what we check says doe this array contain this value
          newArr.push(array[i]);                //if there are no duplications returns -1, otherwise returns index.
         }                                          
    }
    return newArr;
};

// _.unique2 = function(array){
//     return _.reduce(array, function(uniqueVals, value){
//         if(_.indexOf(uniqueVals, value) === -1) uniqueVals.push(value);
//         return uniqueVals;
//     }, []);
// };
/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.map = function(collection, transform){
    var mapped = []; //empty container
    _.each(collection, function(value, position, collection){   //anonymous function is called 
        mapped.push(transform(value, position, collection));    //and the arguments are what each returns so use 
    });                                                           //the parameters to get ANY function that can utilize each
    return mapped;   //transfor
};


/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck =function(array,prop){
    var plucked = [];
    _.map(array, function(prop){
        plucked.push(prop.name);
    });
    return plucked;
}; 





/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array,value){
    var result = _.indexOf(array,value) > 0  ? true : false;   
    return result;
};
/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// _.every = function(collection, test) {
//   test = _.identity;
//   return !!_.reduce(collection, function(test2, item) {
//     return test2 || test(item);
//   }, true);
// };

// _.every = function(coll, test){
//   var numFalse = 0;
//   if(_.typeOf(test) !== "function"){
//       test = _.identity;
//   }
//   _.each(coll, function(val, loc, all){
//       if(!test(val,loc,all)){
//           numFalse += 1;
//       }
//   });
//   return numFalse === 0 ? true : false;
// };
 
// _.some = function(collection, test){
//   var numTrue = 0;
//   if(_.typeOf(test) !== "function"){
//       test = _.identity;
//   }
//   _.each(collection, function(value, position, list){
//       if(test(value,position,list)){
//           numTrue += 1;
//       }
//   });
//   return numTrue === 0 ? false : true;
// };
_.every = function(collection, test){
    test = test || _.identity;
    var result = true;
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            if(!test(collection[i], i, collection)) { return false; }
        }
    } else { 
        for(var key in collection){
             if(!test(collection[key], key, collection)) { return false; }
         }
    }
    return result;
}





_.some = function(collection, test){
    test = test || _.identity;
    var result = false;
    if(Array.isArray(collection)){
        for(var i = 0; i< collection.length; i++){
            if(test(collection[i], i, collection)) { return true; }
        }
    } else {
         for(var key in collection){
             if(test(collection[key], key, collection)) { return true; }
         }
    }
    return result;
};


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
*/


  _.reduce = function(arr, func, seed) {
   var memo = (seed === undefined) ? arr[0] : seed;
   var i = (seed === undefined) ? 1 : 0;
   while (i < arr.length) {
       memo = func(memo, arr[i], i);
       i++;
   }
   return memo;
};
// //put it in a higher order function
//   _.getFirstCollectionValue = function getFirstCollectionValue(collection) {
//       if(Array.isArray(collection)) {
//           return collection[0];
//       }  // no else statement because so we just move to what happens next if the first 
//           // statement is not true
//          return collection[_.first(Object.keys(collection).sort())];
//   }
/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(copyTo, copyFrom){
  var extended = arguments[0];
  for(var i = 0; i < arguments.length; i++){
      _.each(arguments[i], function(value, key, object){
          extended[key] = value;
      });
  }
  return extended;
};


// This is the proper way to end a javascript library
}());
