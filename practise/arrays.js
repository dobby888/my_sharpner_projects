//ARRAYS:use numbered indexes
//OBJECTS:use named indexes
console.log("SWITCH, BREAK, AND CONTINUE");
console.log("break:stops the further code from printing if required output is obtained");
console.log("continueE:just stops the current element from printing and continues with the code");
console.log("switch:conditional satetments when have to check for equality and not check for range operators is not given and multiple statements are used n is compared to the case number(x)===>if(n==x)==>corresponding element will be printed")
var n=5;
switch(n){
  case 1:console.log("sunday");
  break;
  case 2:console.log("monday");
  break;
  case 3:console.log("tuesday");
  break;
  case 4:console.log("wednesday");
  break;
  case 5:console.log("thursday");
  break;
  case 6:console.log("friday");
  break;
  case 7:console.log("saturday");
  break;
  default:console.log("invalid input");
}


// truth table:for n bits:possible combinations=2^n
// unsigned Int(only stores positive numbers):range=0 to 2^32
// signed Int(stores both positive and negative numbers):range=-2^31 to (2^31)-1===>2^32
// DYNAMIC ARRAYS:
// no fixed size
// generally in a heap data some amount of space is assigned to a specific array and the very next space of the array might be containing an important piece of information .so, computer cant figure out how much space should be assigned to a specific dynamic data(no fixed data)
// hence no computer by default allows dynamic arrays and we can crate only have static or fixed arrays
// then how do they exist then:
// 1.create a new array of bigger length and then copy paste the prev ele into the new array and add the new ele into the array
// time complexity:
// ex:original arr size=3;
// as we increse the length of the arr by 1 we then have to copy paste 3+4+5+......n types====>results in very high time complexity
// 2.by creating more extra spaces(10) than required==>reduces the time complexity to an extent but do not minimises it significantly
// time complexity:
// original arr size=3
// as we add the ele we increase the spaces by 10 at a time and when all the space are completed then we again add 10 spaces and this continues 3+13+23+......===>O(n^2)
// 3.ex:original size=3
//   create an arr of size 6,then 12,then 24,48.....
//   3+6+12+24+48......+n===n+n/2+n/4+n/8+.......+1===2^n=x==>n=log(2) x                                      
// //DYNAMIC ARRAYS IN JAVASCRIPT:
// let selectedcolours=['red','blue'];
// selectedcolours[2]='green';//as arr in js are dynamic we can add and remove the ele from the list 
// selectedcolours[3]=1
// console.log(typeof selectedcolours);

// //HOW TO DEBUG ANY CODE
// make notes when u get those errors and there rectification 
// i/p===>wrong o/p:dry run in note book or print every after every operation in the and rectify the mistake
// if u get the correct answer in dry run but still get the wrong o/p, try to think of another logic
// commenting(breaking) the code into parts
// //RUNNING SUM IN AN ARRAY
// let temp=nums[i]+nums[i+1];
// nums[i+1]=temp;
// return nums;
// //2D ARRAY
// an array inside an array
//DECLARE ARRAYS WITH CONST KEYWORD//
console.log("ARRAY PROPERTIES")
var states=new Array("ap","up","mp","kerala","orissa");//=["ap","up","mp","kerala","orissa"];
console.log(states)
console.log(states[0])
console.log(states.length)
states[0]="punjab";
console.log(states);
var user=["valli","pabbathisreevalli1705",3,34,true]//all the data types can be included in a single array but its not a good data structure
console.log(user)
user.pop();//removes the last ele in the array
console.log(user);//returns the remaining ele in the array
user.pop();
console.log(user);
user.unshift("new value");//adds a new ele at the start of the array but it is an inefficient approach to add an ele in the start of an array
console.log(user)
user.shift();//removes the first ele in the array
console.log(user);
console.log(user.indexOf(3));//returns the index of the corresponding ele
console.log(user.indexOf("newyy"))//returns -1 if the corresponding ele is not present in the array
console.log(Array.from("valli"));//spilts every letter of the word as an ele of an array
var num = [1, 2, 3, 5, 7];
console.log(num);
var x= num.toString();//converts the array into a string
console.log(x);
var c = num.join('');//joins the string as a single stringfffgetrtrtr
console.log(c);
console.log(typeof x,typeof c);
let req = [1, 2, 3, 4, 5];
delete req[0]//delete removes the element without changing the length of the given array
console.log(req, req.length)
let num1 = [1, 3, 5, 7];
let num2 = [2, 4, 6, 8];
let newarr = num1.concat(num2);//combines and returns the array but doesnt changes the original array and can be used for more than two arrays at a time
console.log(newarr);
let num3 = [11, 12, 13, 14, 15];
console.log(num1.concat(num2, num3));
let num4 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
//num4.sort();
console.log(num4.sort());//sorts the numbers alphabetically
let comparedescending = (a, b) => {
  return b - a;//b-a="+",sorts the numbers in the descending order
}
num4.sort(comparedescending);
console.log(num4)
let compareascending = (a, b) => {
  return a - b;
}
num4.sort(compareascending);
console.log(num4);
num4.reverse();//reverses the array
console.log(num4);
num4.splice(2, 3, 1021, 1022, 1023, 1024, 1025);//2=position to add the new elements(from 22),3=number of items to be removed(22,14,8),numbers=they are to be added in the array
//splice=deletes and adds and modifies the array from the requird index number 
console.log(num4);
let deletedvalues = num4.splice[2, 3, 1021, 1022, 1023, 1024, 1025];
console.log('deletedvalues')
let newnum = num4.slice(3);//removes all the elements of an array from that index onwards if only one index(start) is used
console.log(newnum);
let newnum1 = num4.slice(3, 5);//now it removes the elements from and to the corresponding indexs
console.log(newnum1);
let arr1 = [45, 23, 21];
let az = arr1.map((value, index, array) => {
  console.log(value, index, array)//returns the array
  return value + 1//adds +1 to every element in the array
})
console.log(az);
let arr2 = [55, 33, 31, 0, 3, 5];
let filter = arr2.filter((value) => {// filters and us a new array according to our requirements
  return (value < 10)
})
console.log(filter);
let arrz = [1, 2, 3, 5, 2, 1];
let arr3 = arrz.reduce((h1, h2) => {
  return h1 + h2//adds and reduces the array into a single number 
})
console.log(arr3);
//OR
let arr4 = [1, 2, 3, 5, 2, 1];
const reducefunction = (h1, h2) => {
  return h1 + h2;
}
let arr5 = arr4.reduce(reducefunction)
console.log(arr5);


console.log("MATH OPERATORS");
console.log(Math.abs(-1))
console.log(Math.sqrt(25))
console.log(Math.max(10,5,8))
console.log(Math.min(10,5,8))
console.log(Math.floor(5.8))
console.log(Math.ceil(9.6))
console.log(Math.round(9.2))
//Math.pow(base,exponent)
console.log(Math.pow(2,4))

console.log("SHIFT AND BITWISE OPERATORS");
//5=101,7=111;&=>1&1=1 and all are 0;|=>0|0=0 and all are 1;^=>1^1=0,0^0=0 and remaining are 1
console.log(5&7)
console.log(5|7)
console.log(5^7)
console.log(5<<2)//101=>00+101=00101=20 binary representation;5(num)<<2(n)=101<<2=10100=20 or (num)*(2^n)===>(5)*(2^2)===>5*4=20
console.log(20>>2)//10100=>10100-00=101=5 binary representation;20>>2=10100>>2=101=5 or   (num)/(2^n)===>(20)/(2^2)===>20/4=5


console.log("HEAXADECIMAL NUMBERS");
var decimalNumber = 255;
var hexadecimalNumber = decimalNumber.toString(16);
console.log(hexadecimalNumber); // Output: "ff"
var hexadecimalString = "ff";
var decimalNumber = parseInt(hexadecimalString, 16);
console.log(decimalNumber); // Output: 255     



//SORTING ALGORITHM
//sorting:arrange the ele in an arr in either ascending or descending order
console.log("BUBBLE SORT");
var arr=[3,7,2,8,1,6];
//pair of ele are compared and swaps with the max/min adjacent ele if sorting in ascending/descending order
// Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order. The algorithm compares adjacent pairs of elements and swaps them if necessary, "bubbling" the largest (or smallest) elements to the end (or beginning) of the list in each pass. This process continues until the entire list is sorted.
// [7,3,8,2,6,1]//1 is the smallest ele and it is placed in its correct place
// [7,8,3,6,2,1]//2,1
// [8,7,6,3,2,1]// all the ele are sorted in descending order
// CODE:
var len = arr.length;
for (var i = 0; i < len - 1; i++) {
  for (var j = 0; j < len - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
 // return arr;
console.log("SELECTION SORT");
var arr=[3,8,2,6,7,9,10];
// Selection Sort divides the array into two subarrays: the sorted subarray and the unsorted subarray. The algorithm repeatedly selects the smallest (or largest) element from the unsorted subarray and swaps it with the leftmost element of the unsorted subarray. This way, the sorted subarray grows from left to right, and the unsorted subarray shrinks until the entire array is sorted.
// max ele=10;//place 10 at first and swap the curr first ele to prev  max place
// [10,8,2,6,7,9,3]//next max=9==>swap with 2nd number in the arr
// [10,9,2,6,7,8,3]
// [10,9,8,6,7,2,3]
// [10,9,8,7,6,2,3]
// [10,9,8,7,6,3,2]
// CODE:
var len = arr.length;
for (var i = 0; i < len - 1; i++) {
  var minIndex = i;
  for (var j = i + 1; j < len; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  var temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}
console.log(arr);
//  return arr;
console.log("INSERTION SORT");
var a=[3,7,2,8,1,6];
// Insertion Sort works by iteratively building a sorted subarray within the given array. The algorithm starts with the second element and compares it with the elements in the sorted subarray, shifting elements to the right until it finds the correct position to insert the current element. This process is repeated for each subsequent element until the entire array is sorted.
// [3]//arr of size 1 is initiated then one by one next ele are pushed inside the array and sorted by comparing the current ele with the prev ele in the arr
// [7,3]//7>3
// [7,3,2]//2<3
// [8,7,3,2]//[7,3,2,8] is the first look then,[7,3,8,2]==>[7,8,3,2]==>[8,7,3,2]
// [8,7,3,2,1]//similar comparision as the above
// [8,7,6,3,2,1]
// CODE:
var len = arr.length;
  for (var i = 1; i < len; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
console.log(arr);
 // return arr;
 
 const fruits = ["Banana", "Orange", "Apple"];
 fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits;
 fruits[3]="papaya"
 fruits[9]="grapes"
 console.log(fruits)
 
