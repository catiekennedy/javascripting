/**
 * Created by ck16647 on 6/2/2016.
 */
// Eloquent Javascript

// Chapter 2
// var debt = 140;
// debt = debt -35;
// console.log(debt);
// console.log("");
// var num = 0;
// while (num <= 12) {
//     console.log(num);
//     num = num + 2;
// };
// practiced a do / while loop in chrome console
// do {
//     var yourName = prompt("who are you");
// } while (!yourName);
// console.log(yourName);
// catie

// triangle
// var num = " ";
// for (row = 1; row <= 7; row++) {
//     num = num + "#";
//     console.log(num);
// }


// fizzbuzz
// for (i = 1; i <= 16; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

// refactored fizzbuzz
// for (var i = 1; i <= 100; i++) {
//     var output = "";
//     if (i % 3 == 0) {
//         output += "Fizz";
//     }
//     if (i % 5 == 0) {
//         output += "Buzz"
//     }
//     console.log(output || i);
// }


// chess board
var space = "-";
var hash = "#";
for (i = 1; i < 8; i++) {
    for (j = 1; j < i; j++) {
        if ((i + j) % 2 == 0) {
            console.log(hash);
        } else {
            console.log(space);
        }
    }
    // console.log('\n');
}







