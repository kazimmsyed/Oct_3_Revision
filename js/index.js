// console.log("Js connected")
// friends={"name":"Yusuf","occupation":"pilot",'position':"student-pilot"}

// let h1;
// setTimeout(()=>{
//     console.log("hello")
//     h1=document.getElementsByTagName('h1')
//     console.log(h1)
// },0)

// function names(whosefriends,...arguments){
//     console.log(`${whosefriends} are`)
//     //since arguments is a list.
//     console.log(arguments[0]['occupation'])
// }


// const fakePromiseRequest=(url)=>{
//     return new Promise((resolve,reject)=>{
//       number=Math.floor(Math.random()*500)
//         setTimeout(()=>{
//             if(number>=250){
//                 resolve(url)
//             }
//             else{
//                 reject(url)
//             }
//         },2000)
//     })
      
// }


// x=fakePromiseRequest('Nahara-couture.org')
// .then((e)=>{
//     console.log(`page ${e}\\page1 visited`)
//     return fakePromiseRequest(`${e}`)
// })
// .then((e)=>{
//     console.log(`page ${e}\\page2 visited`)
// })
// .catch((err)=>{
//     console.log(`server error while reaching ${err}`)
// })




h1=document.getElementsByTagName('h1')[0]
//indexing because it will give me a HTMLCOLLECTION
function ColorChange(color){
    x=(resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color
            resolve("finished")
        },1000)
    }
    return new Promise(x)
}

/*
To avoid callback hell. We use the .then to seperate if 
the request was succesffull.
So we have to attach resolve and reject func.
In Promises, u pass a callback which takes two parameters one is resolve
and other is reject.

*/

let data;
let x= async()=>{
    await ColorChange('blue')
    await ColorChange('green')
    data=await ColorChange('purple')
}

x().then(()=>console.log(data))