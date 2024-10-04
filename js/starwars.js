// x=fetch('https://swapi.dev/api/people/1')

// x.then((data)=>{
//     x=data.json().then((e)=>console.log(e))
// });

// // there is an extra step of using response_object.json() which 
// // returns a promise. And then u attach ur call backs on that or use await within an async func and take 
// // op using op=await res.json()
// //


// const PersonelInfo=async()=>{
//     try{
//         let x=1
//         while(x<=3){
//             res=await fetch(`https://swapi.dev/api/people/${x}`)
//             op=await res.json() //since res.json also return a promise
//             console.log(op['name'],"born in",op['birth_year'])

//             //object destructuring and renaming
//             let {birth_year:dob,name,gender='NA'}=op
//             console.log(name,dob,gender)

//             x=x+1;
//         }
        
//     }
//     catch(e){
//         console.log('err is',err)
//     }
// };


  
// 
const PersonelInfo= async ()=>{
    try{
        num=prompt('I am a Star wars dictionary, gimme a num?')
        res= await axios.get(`https://swapi.dev/api/people/${num}`)
        res=res.data
        let {birth_year:dob,name,gender='NA'}=res
        console.log(name,dob,gender)
    }
    catch(e){
        console.log(e)
    }
    
}

PersonelInfo()

//function AskforInput(question){
    //     const readline = require('readline').createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //       });
        
    //     readline.question(question, name => {
    //     readline.close();
    //     return name
    //     });
    // }
    