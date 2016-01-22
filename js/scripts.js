//works!//
var pingPong = function(userNum){
var i;

for (i = 1; i <= userNum; i++){
   if(i % 15===0) {
    console.log ("pingpong");
  } else if(i % 3===0) {
  console.log ("ping");
  } else if (i % 5===0) {
  console.log ("pong");
  } else {
  console.log (i);
  }
 }
};

$(document).ready(function() {


  $("form#inquiry").submit(function(event) {
   var userNum = parseInt($("input#userNum").val());
    var result = pingPong(userNum);

$("#result").show();
$("#result").text(result);

   event.preventDefault();

 });
});
//passes spec
// var pingPong = function(number){
//
//  if (number % 15 === 0){
//    return 'pingpong';
//  } else if (number % 5 === 0){
//    return 'pong';
//  } else if (number % 3 === 0){
//    return 'ping';
//  } else {
//   return i;
//  }
// };

// var pingPong = function(number){
//  var i;
//  for (i =1; i<= number; i++){
//  if (number % 15 === 0){
//    console.log 'pingpong';
//  } else if (number % 5 === 0){
//    console.log 'pong';
//  } else if (number % 3 === 0){
//    console.log 'ping';
//  } else {
//   console.log i;
//  }
//  }
// };


// var pingPong = function(userInput){
// var i;
// for (i = 1; i <= userInput; i++){
//   if(i % 15===0){
//   console.log ("pingpong");
//   } else if(i%3===0){
//     console.log ("ping");
//   } else if (i%5===0){
//   console.log ("pong");
//   } else {
//   console.log (i);
//   }
//  }
// };

// $("#result").append(result);
//    event.preventDefault();
//  });
// });
