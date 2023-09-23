//insertion in the beginning
/*class Node{
  constructor(a){//"a" is the val which could be passed through the constructor to the node===>stores that
    this.value=a;
    this.next=undefined;
  }
}
insertion_start=function(head,value){
  new_node=new Node(value);
  new_node.next=head;
  return new_node;
}
insertion_end=function(head,value){
  new_node=new Node(value);
  temp=head;
  while(temp.next != null){
    temp=temp.next;
  }
  temp.next=new_node;
}
insertion_middle=function(head,n,value){
  new_node=new Node(value);
  temp=head;
  while(n-1>0){
    temp=temp.next;
    n=n-1;
  }
  x=temp.next;
  temp.next=new_node;
  new_node.next=x;
}
 deletion_in_the_end=function(head){
   temp=head;
   while(temp.next.next!=null){
     temp=temp.next;
   }
   temp.next=temp.next.next;
 }
deletion_in_the_middle=function(head,n){
   temp=head;
   while(n-2!=0){
     temp=temp.next;
     n=n-1;
   }
   temp.next=temp.next.next;
 }
display=function(head){
  temp=head;
  while(temp!=null){//last value in the node will be null,so until the last value
    console.log(temp.value);
    temp=temp.next;
  }
}
head=new Node(5);
head=insertion_start(head,10);
head=insertion_start(head,0);

insertion_end(head,20);
insertion_end(head,30);

insertion_middle(head,3,100);
deletion_in_the_middle(head,3)
head=head.next;//deletes the node at start
 deletion_in_the_end(head)
display(head);*/
class Node{
    constructor(a){
      this.value=a;
      this.next=undefined;
    }
  }
  insertion_start=function(head,value){//starting node will always refered through the head pointer
   new_node=new Node(value);//creating a new node
    new_node.next=head;//starting pointer is changed to new_node
    return new_node;
  } 
  insertion_end=function(head,value){
    new_node=new Node(value);
    temp=head;//create a temporary pointer to preserve the head pointer
    while(temp.next!=null){//next node would be the last node in the list
      temp=temp.next;//head will be the second last node in the list
    }
    temp.next=new_node;//last node will be updated t the new_node
    //starting point remains the same so we dont have to return anything
  }
  insertion_middle=function(head,n,value){
    new_node=new Node(value);
    temp=head;
    while(n-1>0){//we have to skip n-1 nodes to reach the nth node
      temp=temp.next;
      n=n-1;//code would run until it reaches the end of the list 
    }
    x=temp.next;
    temp.next=new_node;
    new_node.next=x;
    }
  deletion_end=function(head){
    temp=head;
    while(temp.next!=null && temp.next.next!=null){//if temp.next=null===>single node in the list or no data
      temp=temp.next;
    }
    temp.next=temp.next.next;//===null
  }//edge cases:single node==>temp.next.next doesnt exist
  deletion_in_nth_node=function(head,n){
    temp=head;
    while(n-2!=0){//skips n-2 nodes to reach the required node as prev is also involved
      temp=temp.next;
      n=n-1;//if not then it continues the code to infinite loop==>leads to null.next which deoesnt exist
    }
    temp.next=temp.next.next;
  }
  display=function(head){//to display all the linked list
    temp=head;//we should preserve the starting pointer bcz if its gone then the entire linked list will be gone
    while(temp!=null){
      console.log(temp.value);
      temp=temp.next;
    }
  }
  /*var node=new Node(4);
  console.log(node)//Node { val: 4, next: undefined }
  console.log(node.val)//4
  console.log(node.next)//undefined
  */
  head=new Node(5);
  head=insertion_start(head,10);
  head=insertion_start(head,0);
  insertion_end(head,20);
  insertion_end(head,30);
  insertion_middle(head,3,100);
  head=head.next;//deletes the starting node of the linked list
  //console.log(head)
  deletion_end(head);
  deletion_in_nth_node(head,2);//2nd node which was supposed to be 5 is deleted
  display(head);

  //RECURSION//


  /*console.log("PRINT FIRST 5 NUMBERS");
function main() {
  print(1);
}
function print(i) {
  if (i>5) {
     "Line change to new line"
    return ;
  }
  console.log(i);
  print(i+1);
}
main();

console.log("PRINT SUM OF FIRST 5 NUMBERS");
function print(i) {
  if (i>5) {
    return 0;
  }
  let sum = i + print(i + 1);
  return sum;
}
let result = print(1);
console.log(result);

function print(i,n,sum){
if(i>10 || i==n){
return sum;
}
sum=sum+i;
return print(i+1,n,sum);
}






console.log("PRODUCT OF FIRST FIVE NUMBERS");
function print(i) {
  if (i > 5) {
    return 1;
  }
  let product = i * print(i + 1);
  return product;
}
let result = print(1);//called the function print by assigning a the variable i=1
console.log(result);

function main(){
  print(fib(5));
}
function print(n){
  if(n==0){
    return 0;
  }
  if(n==1){
    return 1;
  }
  var sum=fib(n-1)+fin(n-2);
  return sum;
}
let result=print(1);
console.log(result);


console.log("FIBONACCIA NUMBERS")
function main() {
  print(5);
}
function print(n) {
  if (n < 0) {
    return;
  }
  print(n - 1);
  console.log(fib(n));
}
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
main();

var sum =0;
var n=5;//  (you can take any number manually)
for(var i=0;i<10;i=i+2)
{
  if(i==n)[
    break;
  ]
sum =sum+i;
}
console.log(sum);
function print(i) {
  if (i > 10 || i === 5) {
    return 0;
  }
  var sum = i;
  return sum + print(i + 2);
}

var result = print(0);
console.log(result);
function print(i, n, sum) {
  if (i > 10 || i === n) {
    return sum;
  }
  if (i === n) {
    return sum;
  }
  sum += i;
  return print(i + 2, n, sum);
}

var n = 5;
var sum = 0;
sum = print(0, n, sum);
console.log(sum);


function printDivisibles(n) {
  if (n === 0) {
    return ;
  }

  printDivisibles(n - 1);

  if (n % 5 === 0) {
    console.log(n);
  }
}

// Example usage
printDivisibles(100);

console.log("PERMUTATIONS OF A STRING");
function permutestring(n) {
 let results=[];
  if (n.length===1) {
    results.push(n);
    return results;
  }
  for(let i=0;i<n.length;i++){
    let char=n[i];
    let rem=n.slice(0,i)+n.slice(i+1);
    let per=permutestring(rem);
    for(let j=0;j<per.length;j++){
      results.push(char+per[j]);
    }
  }
 return results;
}
let str="abc";
let permutations=permutestring(str);
console.log(permutations);


let arr=[];
function main(){
  permute("abc","");
  console.log(arr);
}
function permute(str,per){
  if(str.length===0){
    arr.push(per);
    return
  }
  for(let i=0;i<str.length;i++){
    let newper=per+str.charAt(i);
    let newstr=str.slice(0,i)+str.slice(i+1);
    permute(newstr,newper);
  }
}
main();

var arr=[1,2,3];
for(var i=0;i<arr.length;i++)
{
    for (var j=i;j<arr.length;j++)
    {
        var str1="";
        for (var k=i;k<=j;k++)
        {
            str1=str1+arr[k];
        }
        console.log (str1);
    }
}

let arr=[];
function main(){
  subsequence([1,2,3],[]);
  console.log(arr);
}
function subsequence(arr,sub){
  if(arr.length===0){
    arr.push(sub);
  }
  for(let i=0;i<arr.length;i++){
    let newsub=sub.concat(arr[i]);
    let newarr=arr.slice(i+1);
    subsequence(newarr,newsub);
  }
}
main();
let arr = [];

function main() {
  subsequence([1, 2, 3], []);
  console.log(arr);
}
function subsequence(arr, sub) {
  if (arr.length === 0) {
    arr.push(sub);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let newsub = sub.concat(arr[i]);
    let newarr = arr.slice(i + 1);
    subsequence(newarr, newaub);
  }
}

main();

function subsequence(arr){
  const res=[];
  function print(index,curr){
    res.push(curr);
    for (let i=index;i<arr.length;i++){
      print(i+1,curr.concat(arr[i]));
    }
  }
  print(0,[]); 
  return res;
}
const arr=[1, 2, 3];
console.log(subsequence(arr));


let newstr = str;
  let newper = per.substring(1);
  f(newstr, newper, arr);
  
  str = str.substring(1);
  f(str, per, arr);

let arr = [];

function permute(init, fin) {
  if (init.length === 0) {
    arr.push(fin);
    return;
  }

  for (let i = 0; i < init.length; i++) {
    let newfin = fin + init.charAt(i);
    let newinit = init.substring(0, i) + init.substring(i + 1);
    permute(newinit, newfin);
  }
}

function main() {
  arr = [];
  permute("abc", "");
  console.log(arr);
}

main();

function subsequence(arr,currindex,currseq){
  if (currindex===arr.length){
    console.log(currseq);
    return;
  }
  subsequence(arr,currindex+1,currseq);
  subsequence(arr,currindex+1,currseq.concat(arr[currindex]));
}
function main() {
  let arr = [1, 2, 3];
  subsequence(arr, 0, []);
}
main();
function subsequence(arr){
  const res=[];
  function print(index,curr){
    if(index===arr.length){
      if(curr.length>0){
        res.push(curr);
      }
      return;
    }
    print(index+1,curr.concat(arr[index]));
    print(index+1,curr);
  }
  print(0,[]);
  return res;
}
const arr=[1, 2, 3];
console.log(subsequence(arr));
*/
function mergesort(nums){
    if(nums.length<=1){
      return nums;
    }
    var mid=Math.floor(nums.length/2);
    var left=nums.slice(0,mid);
    var right=nums.slice(mid);
    var sortedleft=mergesort(left);
    var sortedright=mergesort(right);
    return merge(sortedleft,sortedright);
  }
  function merge(left,right){
    let result=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
      if(left[i]<right[j]){
        result.push(left[i]);
        i++;
      }
      else{
        result.push(right[j]);
        j++;
      }
    }
    while(i<left.length){
      result.push(left[i]);
      i++;
    }
    while(j<right.length){
      result.push(right[j]);
      j++;
    }
    return result;
  }
  function main(){
    let arr = [5,3,6,2,7,1];
    let sortedarr = mergesort(arr);
    console.log(sortedarr.join(' '));
  }
  main();
  

  
  //COMPARATORS//

  /*var letter=['b','P','c','a'];
letter.forEach((letter)=>{
  console.log(letter,' ',letter.charCodeAt(0));
})*/
var nums=[2,5,100,4];
/*console.log(nums.sort());
nums.forEach((nums)=>{
  console.log(nums,' ',String(nums).charCodeAt(0));
})*/
var sort=nums.sort((a,b)=>{
  if(a<b){//>
    return -1;
  }
  else if(a>b){//<[descending order]
    return 1;
  }
  else{
    return 0;
  }
 //return a-b;//ascending
});
console.log(sort);
/*
var bts=[
  {name:'rm',age:28},
  {name:'jin',age:31},
  {name:'suga',age:30},
  {name:'jhope',age:28},
  {name:'jimin',age:27},
  {name:'v',age:27},
  {name:'jk',age:26},
]
var compare=(a,b)=>{
  return a.name.length-b.name.length;
  //return a.age-b.age;//returns the object in ascending order of age
}
console.log(bts.sort(compare));*/


//Write a Program to create a Class Employee.It contains two attributes -> Name, Salary.Create 5 objects and initialize any random values for Name and Salary to it.Store all these objects in an Array and print the names of the employees sorted in Descending Order using Comparators (Use Salary to sort the elements)
/*class Employee{
  constructor(n,s){
    this.name=n;
    this.salary=s;
  }
}
  var employees=[
  new Employee("sree",50000),
  new Employee("hari",70000),
  new Employee("pavan",80000),
  new Employee("surya",40000),
  new Employee("shyam",30000),
];
employees.sort((a, b)=>b.salary-a.salary);
for (var i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}*/
  