// truth table:all possible combinations of the bits
// n bits=2^n possible combinations in truth table
// binary format:
// 36%2=0,36/2=18
// 18%2=0,18/2=9
// 9%2=1,9/2=4
// 4%2=0,4/2=2
// 2%2=0,2/2=1
//    =1
// binary format of 36=100100(note upwards)
// starting from index zero at last ele:
// (2^index)*number===(2^5)*1+(2^4)*0+(2^3)*0+(2^2)*1+(2^1)*0+(2^0)*0=36
// octal form:divide the number with 8
// //OCTAL FORMAT
// 8|36=4   =>4,4=>8^0*4=4
// 8|4=4      |8^1*4=32    =>4+32=36
// -----
//   4
// //AND property
// 1 && 1=1
// 0 && 1=0
// 1 && 0=0
// 0 && 0=0
// ex:A && B ==>R      ex:1011     ex:if A0=smallest
//   ==> R <= A && B      1101    A0&A1&A2&A3&A4==>R<=A0
//   if A > B           --------   ex:110101==>unset
//   ==> R <= B           1001        111111==>set
//   if B > A                       -----------------
//   ==> R <= A                       110101==>always unset

// 0=unset bit==>cant be set to "1"
// 1=set bit
// //OR property
// 1 || 0=1
// 1 || 1=1
// 0 || 1=1                     
// 0 || 0=0                     =>atleast one set bit
// ex:A || B==>R             ex:|10101 | 0
//   ==> R >= A and R >=B       |11010 | 0 =>both unset 
//    if A > B                 -------------
//   ==>R >= B                   11111 | 0
//    if B > A               ex:A0|A1|A2|A3|A4(if A4=largest)
//   ==>R >=A                   ===>R>=A4
// //AND and OR OPERATORS using BINARY FORMAT of 5,7
// 5=101
// 7=111
// ---------------------------------------
// 5 && 7==>101
//          111
//       --------
//          101===>5
// ---------------------------------------
// 5 || 7==>101
//          111
//      -----------
//          111===>7
// ---------------------------------------
// //XOR(^) OPERATOR
// 1 ^^ 1=0
// 0 ^^ 1=1
// 1 ^^ 0=1
// 0 ^^ 0=0
// ex:101010       *A^A==>0//commutative
//    110110      ==>10101
// ------------      10101
//    011100        -------
//                   00000==>0
// //LEFT SHIFT(append 0 from the rhs)
// 10101<<0==10101
// 10101<<2==1010100
// //RIGHT SHIFT(remove corresponding number of rightmost numbers)
// 10101>>0==10101
// 10101>>2==101(last "01" are removed)
// //to know whether the 3rd most bit is set are not
// n=3===>n-1=2
// (10101>>2) && 1
// (10010>>2) && 1--->0(not set)[100 && 001===>000]

console.log("NUMBER WITHOUT ANY DUPLICATE in nums.length=2n+1");
var nums=[1,3,7,3,1,7,2,4,6,4,6];
for(var i=0;i<nums.length;i++){
  var count=0;
  for(var j=0;j<nums.length;j++){
    if(nums[i]===nums[j]){
      count++;
    }
  }
   if(count===1){
      console.log(nums[i])
    }
}
//time complexity for the above code=O(n^2)
//approach.2:to store everything in map and set:time complexity=O(n)
// first add the ele of the arr in a new list one at a time then remove the ele if the ele is already added in the arr like this the only ele remained at last would be the ele which doesnt have any duplicate.but,space complexity in this approach would be hgher and to reduce it we would be using binary operators.using xor(A0 ^ A0===0) operator
// USAGE OF RIGHT SHIFT:to know whether the number at the nth bit is set or not===>(number>>(n-1)) && 1===>0=not set,1=set
// USAGE OF LEFT SHIFT:to place a number at a certain bit.ex:number=10000,place 1 at 3rd(n)  most nit==>(number(1<<(n-1)))=10100
// int=4 bytes=32 bits=(2^32)-1 is the max bit=2.14*10^9===>max zero's possible for an int=9
//   binary format of 5=101,to represent 5 in a 32 bit format 00000000000000000000000000000101(leading zero's would be added as they wont change the value of the number)
// //how to convert a number into its negative integer
// 1's compliment:0->1,1->0
// binary format of 5=00000000000000000000000000000101
// 1s compliment of 5=11111111111111111111111111111010
//                                                  +1
// ------------------------------------------------------------
// req. number(-5)   =11111111111111111111111111111011
//   so,(1's compliment of the binary format of the number+1===negative integer of the number,which is also known as the 2's compliment)

// hamming weight=number of digits in the number which are not zero
// hexadecimal:0 to9 numbers,a=10,b=11,c=12,d=13,e=14,f=15
// ASCII VALUES:
// 0 to 9=48 to 57
// A to Z=65 to 90
// a to z=97 to 122*/
//ALPHABET TO ASCII VALUE
const character = 'A';
const asciiValue = character.charCodeAt(0);

console.log(asciiValue); // Output: 65
//ASCII VALUE TO ALPHABET
for (let i = 65; i <= 90; i++) {
  const character = String.fromCharCode(i);
  const asciiValue = i;
  
  console.log(character + ': ' + asciiValue);
}
console.log("COUNT NUMBER OF BITS.HAMMERING WEIGHT:number of ele in a string other than zero");
//var n = 00000000000000000000000000001011;//n is a number
var  n = 11111111111111111111111111111101;
var count=0;
    for (var i=0;i<=31;i++)
    {
        if(((n>>i)&1)===1)
        {
            count=count-1;
        }
    }
  console.log(count);  
//return count
console.log("ALTERNATING BITS");
var n=7;
//var n=7;
var count=1;
while (n>0)
{
  var i=n&1;
  var j=(n>>1)&1;
  if(i^j==0)
  {
    count=0;
    console.log(false);
    //return false
  }
  n=n>>1;
}
if(count==1)
{
  console.log(true);
  //return true
}
console.log("")


//TIME AND SPACE COMPLEXITY//



// Primitive Data Types (e.g., int, float, char):

// Time Complexity: O(1) for most operations (e.g., arithmetic, assignment).
// Space Complexity: O(1) since they have fixed memory requirements.
// Arrays:

// Time Complexity:
// Accessing an element by index: O(1).
// Searching for an element (unsorted): O(n).
// Searching for an element (sorted, binary search): O(log n).
// Insertion/Deletion at the end (dynamic array): O(1) on average (amortized).
// Insertion/Deletion in the middle (dynamic array): O(n).
// Space Complexity: O(n) for a static array (fixed size), O(n) or less for a dynamic array (e.g., ArrayList in Java, vectors in C++).
// Linked Lists:

// Time Complexity:
// Accessing an element by index (singly linked): O(n).
// Insertion/Deletion at the beginning: O(1).
// Insertion/Deletion at the end: O(n) for singly linked, O(1) for doubly linked.
// Space Complexity: O(n).
// Algorithms:

// Sorting Algorithms:

// Time Complexity:
// Best-case: O(n log n) (e.g., merge sort, quicksort).
// Average-case: O(n log n).
// Worst-case: O(n^2) (e.g., bubble sort, insertion sort).
// Space Complexity: O(log n) to O(n) depending on the algorithm.
// Search Algorithms:

// Linear Search:

// Time Complexity: O(n) in the worst case.
// Space Complexity: O(1).
// Binary Search (on a sorted array):

// Time Complexity: O(log n).
// Space Complexity: O(1).
