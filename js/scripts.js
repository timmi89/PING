//works!//
var pingPong = function(userNum){
var array = [];

for (var i = 1; i <= userNum; i++){
   if(i % 15===0) {
  array.push("pingpong");
  } else if(i % 3===0) {
array.push("ping");
  } else if (i % 5===0) {
array.push("pong");
  } else {
array.push(i);
  }
 }
 return array;
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


//trying something else
// var pingpong = function(userNum) {
//   var set = [];
//   for (var i = 0; i <= userNum) {
//     if (i % 15 === 0) {
//       set.push("pingpong");
//     } else if (i % 5 === 0) {
//       set.push("pong");
//     } else if (i % 3 === 0) {
//       set.push("ping");
//     } else {
//       set.push(i);
//     }
//     i++;
//   }
//   return set;
// }
//

// $(document).ready(function() {
//   $("form#userForm").submit(function(event) {
//     var integer = parseInt($("input#userInput")).val();
//     var result = pingPong(userNum);
//
//     $("#output").text(result);
//     event.preventDefault();
//   });
// });

// var pingPong= function(userNum) {
//   var num = []
//
//   for (i=1; i <= userNum; i++){
//     if (i % 15===0) {
//        return ("pingpong");
//     } else if (i % 5===0){
//        return ("pong");
//     } else if (i % 3===0){
//      return ("ping");
//     } else {
//        (i);
//     }
//   }
// };
