const val = a => a + 1;
const vals = (a) => a + 1;
console.log(val(5));
console.log(vals(5));


const fetchData1 = callback => {
     setTimeout(() => {
          callback("Done");
     }, 2000);
};

setTimeout(() => {
     console.log("this is the asyncronous code");
     fetchData1(text => {
          console.log(text);
     });
}, 2500);

const fetchData = (callback) => {
     setTimeout(() => {
          callback("Done");
     }, 2000);
};

setTimeout(() => {
     console.log("this is the asyncronous code");
     fetchData((text) => {
          console.log(text);
     });
}, 2500);

console.log("second cons");
console.log("third cons");



const fetchDatas = () => {
     const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Done");
          }, 1500);
     });
     return promise;
};

setTimeout(() => {
     console.log("this is the done");
     fetchDatas().then((text) => {
          console.log(text);
          return fetchDatas();
     }).then((text2) => {
          console.log(text2);
     });
}, 2000);
