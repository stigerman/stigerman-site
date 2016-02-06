var animal = {};
animal.species ='Horse';
animal["name"] = 'Etsy';
animal.noises = [];
console.log(animal);
//
var noises = [];
noises[0]="neighh";
noises.push("gallop");
noises.unshift("snort");
noises[noises.length - 1] = "Ouch";
console.log(noises.length);
console.log(noises);
console.log(noises.pop());
console.log(noises);
//step 3
 animal["noises"] = noises;
 console.log(animal.noises);
 //step 4
 noises.push('Gorgeous');
 console.log(animal.noises);
 //Dot notation
 //[] notation
 //step 6
 var animals = [];
 animals.push(animal);
 console.log(animals);
 
 
 var duck = {
     species: 'duck',
     name: 'Jerome', 
     noises: ['quack', 'honk', 'sneeze', 'woosh'] 
 }
 
 animals.push(duck);
 console.log(animals);
 
  var panda = {
     species: 'panda',
     name: 'Maxx', 
     noises: ['What it do!', 'Panda style'] 
 };
 var koala = {
     species: 'marsupial',
     name: 'Kenny', 
     noises: ['Hello there', 'Goodbye'] 
 };
 
 animals.push(panda);
 animals.push(koala);
 console.log(animals);
 console.log(animals.length);
  console.log("this is a seperating");
//Step 7
//Array data structure allow us to add multiple objects 
 var friends  = []; //to randomly select objects in the array//
 function randomAnimal (arr){
   var randomFriend = Math.floor(Math.random() * arr.length);
  return arr[randomFriend];
 }
 
friends.push(randomAnimal(animals).name);
 console.log(friends);


//Search functino takes a name of an animal as a parameter
// The for loop starts at 0 and loops through the length of the array animals 
// We increment throught the loop until the parameter strictly equals a name within the array
// I represents an index, so we return the array animals and use i for the index posiition
function search(nameOfAnimal) {
 for (var i = 0; i < animals.length; i++)
  if(nameOfAnimal === animals[i].name){
   return animals[i];
  } else {
   return null;
  }
}
console.log(search('Etsy'));
  
 //explain this bit of code
function edit(name, obj){
  for( var i = 0; i < animals.length; i++){
    if(name === animals[i].name){
     animals[i] = obj;
      } 
   } 
}

function remove (name) { 
  for( var i = 0; i < animals.length; i++){
    if(name === animals[i].name){
     animals.pop();
      } 
   } 
}

function create (name, species, noise) {
 var newObj = { };
 newObj.species = species,
 newObj.name = name,
 newObj.noise = noise,
 animals.push(newObj);
 console.log(newObj.name);
}
console.log(remove("Etsy"));
 console.log(create("Coolio", "horse", "moo"));
  console.log(animals[3]);
  
function createMe (object) { 
  for( var i = 0; i < animals.length; i++){
    if(object.name === animals[i].name){
     return
      } 
   }  if (object.name.length > 0 && object.species.length > 0) {
      animals.push(object);
   }
}
 