//this function run every 2 seconds multiple times
//  setInterval(()=>console.log("this function 2 seconds"),2000);

//this function executed after 3 seconds only one time
// setTimeout(()=>
     
//      console.log("this function executed after 3 seconds"),3000);

const id=setInterval(
    ()=>
    {
        console.log("this function executed every 1 seconds")
    }
       , 1000
)

setTimeout(
    ()=>
    {
        clearInterval(id);
        console.log("interval stoppped");
    },
          10000

)