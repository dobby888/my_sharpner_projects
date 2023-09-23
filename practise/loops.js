// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number)
//     // Code to work with each number
// });


// const numbers = [1, 2, 3, 4, 5];

// // Using map to create a new array with the same numbers
// const newArray = numbers.map(function(number) {
//     return number;
// });

// console.log(newArray);


// const numbers = [1, 2, 3, 4, 5];

// // Using map to create a new array with the same numbers
// numbers.map(function(number) {
//     console.log(number)
// });


// const numbers = [1, 2, 3, 4, 5];
// let nums=numbers.forEach(function(number) {
//     console.log(number+2);
// });
// console.log(numbers)
// console.log(nums);

// const numbers1= [1, 2, 3, 4, 5];
// let nums1=numbers1.map(function(number1) {
//     return number1+2;
// });
// console.log(nums1)
// console.log(numbers1)

// const numbers = [1, 2, 3, 4, 5];
// let nums=numbers.forEach(function(number,index,array) {
//     array[index]=number+2;
// });
// console.log(numbers)
// console.log(nums)



// let nums=[1,4,2,5,3];
// let sum=0;
// for(let i=0;i<nums.length;i++){
//     for(let j=1;i+j<=nums.length;j+=2){
//         let sub=nums.slice(i,i+j);
//         if(sub.length%2===1){
//             let subsum=sub.reduce((acc,curr)=>acc+curr,0);
//             sum+=subsum;
//         }
//     }
// }
// console.log(sum);


//INFINITY//
let number=2;
if(number!=Infinity){
    number+=number;
    console.log(number)
}
console.log(typeof Infinity)

console.log(Number.MAX_SAFE_INTEGER);//+(2^53-1)
console.log(Number.MIN_SAFE_INTEGER);//-(2^53-1)
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);//(1/0)l
console.log(Number.NEGATIVE_INFINITY);//(-1/0)
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.3));
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));//>MAX_SAFE_INTEGER

//Number.parseFloat():Converts a string to a number
console.log(Number.parseFloat("-10.33"))//-10.33

//Number.parseInt():Converts a string to a whole number
console.log(Number.parseInt("-10.33"))//-10