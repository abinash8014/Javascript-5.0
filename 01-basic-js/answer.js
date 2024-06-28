// 1. print all even numbers from 0-100

// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         console.log("num=",num)
//     }
// }

// 2. create a game you start with any random game number.ask the user to keep guessing the game number untill the user number match with the game number. 

// let gameNum=25;
// let userNum = prompt(" guess the game number!");

// while(userNum !== gameNum){
//     userNum = prompt("you entered wrong number,guess agian :");
    
// }
// console.log("congartulations! you entered the correct number :)")

//3.1.For a given array with marks of students -> [89,97,44,37,76,60] find the average marks of the entire class .


// let marks = [89,97,44,37,76,60];

// let sum = 0;
// for (let i=0 ; i<=marks.length;i++){
// sum +=[marks[i]]/marks.length;
// }
// console.log("avg is :",sum);

//4.for a given array with prices of 5 items -> [250,645,300,900,50] .All items have an offer of 10% off on them.Change the array to store the final price afterapplying offer. 

let prices = [250,645,300,900,50];
for(let i=0; i<=prices.length;i++){
    let discount = prices[i] * 0.1;
    let finalprice = prices[i] - discount;
    
}
console.log("updated prices after 10% discount", prices);


