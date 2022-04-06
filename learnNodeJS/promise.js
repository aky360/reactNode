let myPromise = new Promise((myResolve, myReject) => {
     let x = 0;
   // some code (try to change x to 5)
     if (x == 0) {
          console.log("processing");
          setTimeout(() => {
               myResolve("OK");
          }, 2000);
     } else {
       myReject("Error");
     }
});

myPromise.then((result) => {
     console.log("this is ok ", result);
}).catch((result) => {
     console.log("this is error", result);
});

function resolve(result) {
     console.log(result);
}
function reject(result) {
     console.log(result);
}

myPromise.then(resolve).catch(reject);


let myPromise2 = new Promise((myResolve, myReject) => {
   // some code (try to change x to 5)
     if (2%10 != 0) {
          console.log("processing2");
          setTimeout(() => {
               myResolve("OKs");
          }, 2000);
     }
});

myPromise2.then(resolve).catch(reject);






async function test() {
     new Promise((res, rej) => {
          let x = 2;
          if (!x) {
               console.log("res");
          }
          else {
               console.log("this is err");
          }
     })
     
     // try {
     //      x = 5;
     //      console.log("this is let redeclaration", x);
     //      return x;
     // } catch (error) {
     //      console.log(error);
     // }
}
   
test().then((res) => {
     console.log(res);
}).catch((err)=>{
     console.log(err);
});
     
