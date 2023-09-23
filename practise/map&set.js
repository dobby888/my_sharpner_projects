/*a={};
b=new Map();
c=new Set();
c.add(5)
b.set(1,5);
b.set("abc",3);
b.set(5,7);
console.log(b)
console.log(b.get(1))
console.log(b.get(4))
if(b.get(4)==undefined){
  b.set(4,1)
}
console.log(b.get(4));
console.log(c)*/

var x="abcdabciobvafa";
//a={};
b=new Map();
for(var i=0;i<x.length;i++){
  if(b.get(x[i])==undefined){//if the ele wasnt there and it is the first occurence of the ele===>initiate the frequency by "1"
    b.set(x[i],1);
  }
   else{
    b.set(x[i],b.get(x[i])+1);//if the ele was already i there then increse the already initiated frequency by "1"
    }
}
var str="";
for(var i=0;i<x.length;i++){
 if(b.get(x[i])==1){//if frequency of the ele is "1"
   str=str+x[i];
 }
}
console.log(b)
console.log(str)

/*
var arr=[1,4,8,6,3,4];
var k=8;
var map = new Map();
var result = [];
for (var i = 0; i < arr.length; i++) {
    var complement = k - arr[i];
    if (map.has(complement)) {
      result.push(complement, arr[i]);
    }
    map.set(arr[i], i);
  }
  console.log(result);
//OR METHOD 2
var array=[1,4,6,7,3,2,7,6];
var k=7;
var map = new Map();
var result = new Set();
for (var i = 0; i < array.length; i++) {
    var complement = k - array[i];
    if (map.has(complement)) {
      result.add(array[i]);
      result.add(complement);
    }
    map.set(array[i], i);
  }
  console.log(Array.from(result));
var
//OR METHOD 3 BUT TIME COMPLEXITY=O(N^2)
var nums=[1,4,6,7,3,2,7,6];
var k=7;
var res=[];
for(var i=0;i<nums.length;i++){
  for(var j=i+1;j<nums.length;j++){
    if(nums[i]+nums[j]===k){
      res.push(nums[i],nums[j])
    }
  }
}
console.log(res)

x=[1,6,4,9,12,14,16];
var k=16;
var b=new Set();
for(var i=0;i<x.length;i++){
  var newele=x[i];
  var a=k-newele;
  if(b.has(a)){
    console.log(a,newele);
    break;
  }
  else{
    b.add(newele)
  }
}
console.log(b)
*/
/*
var map=new Map();
map.set(1, "uno");//we can insert any type of datastructure inside the mas be it ab array,string,integer
map.set(2, "dos");
map.set(3, "tres");
map.set(4, "cuatro");
//map.set(5)
console.log(map)
for(let key of map.keys()){
  console.log(`key is ${key}`);//backticks are used instead of singlr quotes to modify the output as per our requirements
}
for(let value of map.values()){
  console.log(`value is ${value}`)
}
for(let [key,value] of map){
  console.log(`key is :${key} and value is ${value}`);
}
map.forEach((key) => console.log(`${key}`));//value's are printed instead of key's bcuz in coding we always use contents of an index for operations not the index numbers so in modern coding loops like forEach loop only values are considered
map.forEach((value) => console.log(`${value}`));
map.forEach((v,k) => console.log(`value is ${v} and key is ${k}`));
map.forEach((v,k) => console.log(`value is ${v} and key is ${k}`));
map.delete(3);
console.log(map);*/
//SETS IN JAVASCRIPT
/*
const set=new Set();
set.add(60);//adds ele to a set
set.add(21);
set.add(56);
set.add({
  name: 'sree',
  age: 24 });
set.add('dcode');
set.add(67.98);
console.log(set)
console.log(set.size);//size of the set
console.log(set.has(21))//checks whether the set has the corresponding ele
for(let item of set){
  console.log(item)
}
set.delete('dcode');//deletes the corresponding item from the set
for(let item of set){
  console.log(item)
}
const arr=Array.from(set);//converts the set to an arr
console.log(arr)*/