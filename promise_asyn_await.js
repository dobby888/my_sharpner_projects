const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];
function getposts(){
    setTimeout(()=>{//callback fucntion
        let output='';
        posts.forEach((post,index)=>{//callback function
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function createpost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
createpost({title:'post three',body:'this is post three'},getposts)

 

const cart=['shoes','lace','dress','tops'];
api.createOrder(cart,function (){//callback hell or pyramid of doom
    api.proceedToPayment(function (){
        api.showordersummary(function (){
            api.updatewallet()
        
        })
    })
})


//INVERSION OF CONTROL(while using call back:we loose control of code while using callbacks)//
const cart=['shoes','lace','dress','tops'];
api.createOrder(cart,function (){//callback hell or pyramid of doom
    api.proceedToPayment(function (){
        api.showordersummary(function (){
            api.updatewallet()
        
        })
    })
})


//PROMISES:used to handle async operations in js//

const cart=['pen','paper','book','pencil'];
//createorder(cart);///orderId is returned
//proceedtopayment(orderId);//we can proceed to payment after aompleting the cart=>wrap this fucntion inside a callback funciton,responsibility of create an order api for payment but===>inversion of control
const promise=createoder(cart);
//promise=empty object with some data object in it{data:undefined}but as the code progresses the data inside the promise object will be updated as {data:orderdetails}
createorder(cart,function(orderid){
    proceedtopayment(orderid);
});

promise.then();//promises are immutable,they cant be changed or mutated by anyone,resolved only once and surely once,can be passed anywhere  


const github_api="https://api.github.com/users/dobby888"
const user=fetch(github_api)

console.log(user);

//PROMISE:a promise is an object representing the eventual completion or failure of an asynchronous operation.
//promise object is a placeholder until we receive a value from a asynchronous operation (or) a container for a future value

const cart=['pen','pencil','book','scale','notes'];
// createorder(cart,function(orderid){
//     proceedtopay(orderid,function(paymentinfo){
//         showordersummary(paymentinfo,function(){
//             updatewalletbalance();
//         })
//     })
// })//CALLBACK HELL OR PYRAMID OF DOOM===>resolved by using:PROMISE CHAIN;

createorder(cart)
    .then(function(orderid){
        return proceedtopay(orderid);
    })
    .then(function(paymentinfo){
        return showordersummary(paymentinfo);
    })
    .then(function(paymentinfo){
        return updatewalletbalance(paymentinfo);
    });
    
//OR//

createorder(cart)
    .then(orderid=>proceedtopay(orderid))
    .then(paymentinfo=>showordersummary(paymentinfo))
    .then(paymentinfo=>updatewalletbalance(paymentinfo));

//new code//
const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost()

    .then(()=> {

        deletePost().then((deletedPost1) => {

            console.log(deletedPost1.title)

            create3rPost()

                .then(() => {

                        deletePost().then((deletedpost2) => {

                            console.log(deletedpost2.title)

                            deletePost().then((deletedpost3) => {

                                console.log(deletedpost3.title)

                                deletePost().catch((msg) => console.log(msg))

                            })

                    })

                })

            })

        })


function buycar(cb1,cb2,cb3){
    setTimeout(()=>{
        console.log('buy a car')
        cb1(cb2(cb3));
    }, 1000)
}

function planatrip(cb1,cb2){
    setTimeout(()=>{
        console.log('lets go to manali')
        cb1(cb2);
    },2000)
}

function reachmanali(cb){
    setTimeout(()=>{
        console.log('reached manali')
        cb();
    },1000)
}

function  mountain(){
    setTimeout(()=>{
        console.log('reached mountain')
    },1000)
}

buycar(planatrip, reachmanali, mountain);


//AVOID THIS MESS USING CALLBACK FUNCITONS//
function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('buy a car');
        }, 5000)
    })
}

function planatrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('lets go to manali')
        },2000)
    })
}

function reachmanali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached to manali')
        },1000)
    })
}

function  mountain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('some accident happened')
        },1000)
    })
}

buycar().then((msg)=>{//msg==buy a car || whatever is passed inisde the settimeout funciton is invoked in here inside the msg or error keyword
    console.log(msg)
    planatrip().then((msg2)=>{
        console.log(msg2)
        reachmanali().then((msg3)=>{
            console.log(msg3)
            mountain().then((msg4)=>{
                console.log(msg4)
            })
        })
    })
})


//this could be called as promise hell similar to callback hell
//instead of using .then use await
//await should only be used inside a async funciton only
async function fun1(){
    try{
    const msg1=await buycar();
    console.log(msg1);
    const msg2=await planatrip();
    console.log(msg2);
    const msg3=await reachmanali();
    console.log(msg3);
    const msg4=await mountain();
    console.log(msg4);
    }catch(err){
        console.log(err)
    }
}
fun1();

const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];
function getposts(){
    setTimeout(()=>{//callback fucntion
        let output='';
        posts.forEach((post,index)=>{//callback function
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function createpost(post){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error:something went wrong')
        }
    },2000)
})
}

// createpost({title:'post three',body:'this is post three'})
//  .then(getposts);
//  .catch(err=>console.log(err)  

//Async / await:awaits for asynchronuus function to be completed before executing this await line
// async function init(){
//     await createpost({title:'post three',body:'this is post three'});
//     getposts();
// }
// init();

//async await with fetch
// async function fetchusers(){
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();
//     console.log(data);
// }
// fetchusers();



//promise.all//
// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'goodbye'));
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));


const posts = [];
let lastActivityTime = null;

function getPosts() {
    let output = '';
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
    });
    return output;
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject('No posts to delete');
            }
        }, 1000);
    });
}

async function main() {
    // Create a post
    await createPost({ title: 'post one', body: 'This is post one' });

    // Update user's last activity time
    await updateLastUserActivityTime();

    // Log posts and last activity time
    console.log('Posts:', getPosts());
    console.log('Last Activity Time:', lastActivityTime);

    // Delete the last post
    try {
        await deleteLastPost();
        console.log('Post deleted successfully');
    } catch (error) {
        console.error('Error deleting post:', error);
    }

    // Log the new set of posts
    console.log('Updated Posts:', getPosts());
}

main();


//USES OF PROMISES AND PROMISE.ALL//

try{
    await promise1 //creating a post.4s
    //promise1 and promise2 are independent =>they dont have to happen one another=>use promise.all to run both of them parallally to reduce the promise3 run time
    await promise2 //updating ur last activity time.5s
    //promise3 should be called after resolving both promise1 and promise2

    Promise.all((promise1,promise2)).then(()=>{
        promise3 //showing all users ur last activity time.9s=>5s
    })

}
catch{
    error situation 
}

before creating post 4, user lastactivitytime=new Date()
after creating post 4
posts>>{...}
user last activity time 399382088398493

//new code.//
const posts=[];
const user={
    username:'sree',
    lastactivitytime:'4:30pm, 9th of sep '
}
function createpost(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(user);
            resolve("post created successfully");
        },1000)
    })
}


function updateLastUserActivityTime(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        user.lastactivitytime=new Date().getTime();
        resolve();
    },1000)
})
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        if(posts.length>0){
            posts.pop();
            resolve();
        }else{
            reject('no posts are there to delete')
        }
    },1000)
}

function userupdatesapost(){
    console.log('before creating post 4, user lastactivitytime:',user.lastactivitytime)
    Promise.all([createpost(user),updateLastUserActivityTime()])
    .then(([createpostresolves,updateLastUserActivityTimeresolves])=>{
        console.log('after creating post 4');
        console.log('posts:',posts);
        console.log('user last activity time:',user.lastactivitytime)
    })
    .catch(err=>console.log(err))
}
userupdatesapost();


//ASYNC......AWAIT//
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const promisewifebringstickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})
const getpopcorn=promisewifebringstickets.then((t)=>{
    console.log('wife:heres the ticket');
    console.log('husband:we should go in');
    console.log('wife:no im hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const getbutter=getpopcorn.then((t)=>{
    console.log('i got some popcorn')
    console.log('husband:we should go in');
    console.log('wife:i need butter');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});
getbutter.then((t)=>console.log(t))
console.log('person4:shows ticket');
console.log('person5:shows ticket');


//ABOVE CODE USING ASYNC AWAIT=>we know that they happen one after another//
console.log('person1:shows ticket');
console.log('person2:shows ticket');

const premovie=async () => {
    const promisewifebringtikcets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })
const getpopcorn=new Promise((resolve,rej)=>resolve('popcorn'));
const addbutter=new Promise((resolve,reject)=>resolve('butter'))
let ticket=await promisewifebringtikcets;
console.log(`wife:i have ${ticket}`);
console.log('husband:we should go in');
console.log('wife:no im hungry');
let popcorn=await getpopcorn;
console.log(`husband:i got some ${popcorn}`)
console.log('husband:we should go in');
console.log('wife:i need butter');
let butter=await addbutter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log('anything else?');
console.log('wife:lets go we are getting late');
console.log('husband:tq for raminding *grins*')

return ticket;
}
premovie().then((m)=>console.log(`person3:shows ${m}`));


console.log('person4:shows ticket');
console.log('person5:shows ticket');

//new code//

console.log('person1:shows ticket');
console.log('person2:shows ticket');

const premovie=async () => {
    const promisewifebringtikcets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })

const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));

const getcoke=new Promise((resolve,reject)=>resolve('coke'));

const getcandy=new Promise((resolve,reject)=>resolve('candy'));

const getbutter=new Promise((resolve,reject)=>resolve('butter'));

let [popcorn,candy,coke,butter]=await Promise.all([getpopcorn,getcandy,getcoke,getbutter]);

let ticket=await promisewifebringtikcets;

console.log(`${popcorn},${candy},${coke},${butter}`)

return ticket;
}

premovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');



console.log('person1:shows ticket');
console.log('person2:shows ticket');

const premovie=async () => {
    const promisewifebringtikcets=new Promise((resolve,reject)=>{
        setTimeout(()=>reject('ticket'),3000);
    })

let ticket
try{
    ticket=await promisewifebringtikcets;
}catch(e){
    ticket='sad face';
}

return ticket;
}

premovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');

//async and await task//

console.log('person1:shows ticket');
console.log('person2:shows ticket');
const premovie=async () => {
    const promisewifebringtikcets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })
const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
const addbutter=new Promise((resolve,reject)=>resolve('butter'));
const getColdDrinks=new Promise((resolve,reject)=>resolve('colddrink'));
let [popcorn,butter,colddrink]=await Promise.all([getpopcorn,addbutter,getColdDrinks]);
let ticket=await promisewifebringtikcets;
console.log(`${popcorn},${butter},${colddrink}`)

return ticket;
}
premovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket');



const posts=[];
const user={
    username:'sree',
    lastactivitytime:'4:30pm, 9th of sep '
}
function createpost(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(user);
            resolve("post created successfully");
        },1000)
    })
}


function updateLastUserActivityTime(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        user.lastactivitytime=new Date().getTime();
        resolve();
    },1000)
})
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        if(posts.length>0){
            posts.pop();
            resolve();
        }else{
            reject('no posts are there to delete')
        }
    },1000)
}

const userupdatesapost=async ()=>{
    try{
        console.log('before creating post 4, user lastactivitytime:',user.lastactivitytime)
        await createpost(user);
        await updateLastUserActivityTime();
        console.log('after creating post 4');
        console.log('posts:',posts);
        console.log('user last activity time:',user.lastactivitytime)
    -
    }catch(err){
        console.log(err)
    }
}
userupdatesapost();


//UNDERSTANDING PROMISES A LITTELE BETTER//
//promises are asynchronuous 
//promises may be "fullfilled(resolve)" but there is a chance for "rejection"(if not handled correctly=>errors)
//promise is a class and it takes a callback funciton as an input
//when we use "=" it would become a synchronous and should be executed immediately.but, promise is an asynchronous task so it prints a promise with a "pending" and we need to wait some time to get executed/completed===>use asyn await 
async function dadmakespromise(){
try{
    const a=1;
    const dadspromise=await new Promise((resolve,reject)=>{//if we dont use await it wont wait for the compiler to complete the promise and directly prints the values
        setTimeout(()=>{
            //after 1s
        var salarycredited=true;
        var salary=4000
        var costofps4=30000
        var costofps5=40000
    
        if(salarycredited===true && salary>costofps5){
            resolve('buy him a ps5')
        }else if(salarycredited===true && salary>costofps4){
            reject({success:false, message:'should i buy u a ps4 instead'})//if(salary>ps4 cost)===>reject({object})
        }else{
            reject('sorry,ill try to buy it next month')//right now we dont have reject(error) handling(catch) so if the case is rejected w ewill be facing a erro
        }
        },1000) 
  })//await only works inside a async function and  it only works for promises
  console.log(dadspromise)
}catch(err){
    console.log(err);//if(salary<cost)==>sorry,ill try to buy it next month
}
    
}
dadmakespromise();//dad willl buy him a ps5 after 1s(imagine 10 days)
//if we dont give resolve then it stopd in that certain step and dont proceed to the next step==>in the below example if we dont use res(only using console.log) for booting the ps it would stop at that point and donesnt continue to playing


//rpoblems in js solved by js//
async function playstation(){
    console.log('a');
    console.log('b');
    const message1=await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('buying a ps')},1000)
    })
    console.log(message1);
    const message2=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('booting the ps')
            resolve('booting successful')
        },500);
    })
    console.log('message2>>>>',message2)
    console.log('playing')

}
playstation();




