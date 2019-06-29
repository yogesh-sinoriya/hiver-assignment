




const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});



// var lol = "";
// rl.question('What do you think of Node.js? ', (answer) => {
//     // console.log(`Thank you for your valuable feedback: ${answer}`);
//     lol = answer;
//     // return answer;
//     rl.close();
// });


// // async function test(){
// //     // let data = await input('What do you think of Node.js? ');
// //     await console.log(input('What do you think of Node.js? '));
// // }

// // test();
  
async function test(){

// var favFood = 
  console.log(await rl.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default). 
  }));
}

test();