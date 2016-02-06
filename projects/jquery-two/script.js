$(function(){
 var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

 // Code goes here!
 var newUl = $('<ul>').attr('id', 'list');
 $('body').append(newUl);
 

// Next, still within this function, write a loop that creates an <li> and appends it to the ul for each item in the array. 
// For each item, add a class corresponding to the item's content. 
// For example, the first item in the array should have an element that looks like <li class="iron-man">Iron Man</li>.
// .split(), .join(), .toLowerCase() and .replace() are some useful functions you might investigate.
 
 function createAvenger(avenger) {
   var elementClass = avenger.toLowerCase().split(' ').join('-');
   var result = $('<li>').text(avenger).addClass(elementClass).attr('id', 'list');
   return result;
 }

   function create(array) {
     var i = 0;
     array.sort();
     
     while (i < array.length) {
       var elementClass = array[i].toLowerCase().split(' ').join('-');
       var newItem = $('<li>').text(array[i]).addClass(elementClass).attr('id', 'list');
       newUl.append(newItem);
       setTimeout(i++, 2000 * i);
     }
 }
 
 // Write and call a new function that removes the <li>s for Ant Man and Wasp, and adds an <li> for Captain America.
 function reassemble(id1, id2) {
   $(id1).remove();
   $(id2).remove();
   $('<li>').text('Captain America').attr('id', 'list').addClass('captain-america').appendTo(newUl);
 
 }
 
 // sort the avengers array, create the list
 avengers.sort();
 create(avengers);
 reassemble('.ant-man', '.wasp' );

 var button = $('<button>').text('cycle').addClass('button').css('border', '2px solid black').appendTo('body');
 var button2 = $('<button>').text('One by One').addClass('button2').css('border', '2px solid black').appendTo('body');

 $(button).click(function() {
   $('li').first().appendTo(newUl);  
 });
 
 $(button2).click(function() {
     if (_.indexOf(avengers, 'Captain America') === -1) {
       avengers.push('Captain America');
     }
     var listAvengers = $('#list');
         listAvengers.empty();
         avengers.forEach(function(avenger, index) {
             setTimeout(function () {
                 listAvengers.append(createAvenger(avenger));
             }, 500 * index);
         });
     });
 
   
     function sortListAlpha(id){
        $(id).sort(ascSort).appendTo(newUl );
        function ascSort(a, b) {
            return ($(b).text()) < ($(a).text()) ? 1 : -1;
        }
     }
     
     sortListAlpha('li');
});