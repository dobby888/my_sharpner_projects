


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
//msg==buy a car || whatever is passed inisde the settimeout funciton is invoked in here inside the msg or error keyword
 


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