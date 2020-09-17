console.log('\'index.js\' is running');

// const loadScript = (src, callback) => {
//   console.log('Loading script from ' + src);
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script ${src} not found`));

//   document.head.append(script);
// }

// // loadScript('./js/lib/script1.js', (error, script) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     func1();
// //     loadScript('./js/lib/script2.js', (error, script) => {
// //       if (error) {
// //         console.error(error);
// //       } else {
// //         func2();
// //         loadScript('./js/lib/script3.js', (error, script) => {
// //           if (error) {
// //             console.error(error);
// //           } else {
// //             func3();
// //             loadScript('./js/lib/script4.js', (error, script) => {
// //               if (error) {
// //                 console.error(error);
// //               } else {
// //                 func4();
// //               }
// //             });
// //           }
// //         });
// //       }
// //     });
// //   }
// // });


// // console.log('some operation after script loading');

// const loadScriptPromise = src => {
//   return new Promise((resolve, reject) => {
//     console.log('Loading Promise script from ' + src);
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script ${src} not found`));

//     document.head.append(script);
//   });
// };

// loadScriptPromise('./js/lib/script1.js')
//   .then(script => loadScriptPromise('./js/lib/script2.js')).catch(err => console.log(err, "GOTCHA"))
//   .then(script => loadScriptPromise('./js/lib/script3.js')).catch(err => console.log(err, "GOTCHA"))
//   .then(script => loadScriptPromise('./js/lib/script4.js')).catch(err => console.log(err, "GOTCHA"))
//   .then(script => {
//     func1();
//     func2();
//     func3();
//   });


// console.log('some operation after Promise script loading');

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait().then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(1.1))
//   .then(() => { console.log(2.1); setTimeout(() => console.log(2), 0) })
//   .then(() => console.log(3))
//   .then(() => console.log(9));

// Promise.resolve()
//   .then(() => console.log(5))
//   .then(() => console.log(6))
//   //.then(() => console.log(7))
//   .then(() => { console.log(7.1); setTimeout(() => console.log(7), 0) })
//   .then(() => console.log(8));

// Promise.resolve()
//   .then(() => console.log(10))
//   .then(() => console.log(11))
//   //.then(() => console.log(7))
//   .then(() => { console.log(12.1); setTimeout(() => console.log(12), 0) })
//   .then(() => console.log(13));
Promise.all([
  Promise.resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4)),

  Promise.resolve()
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7))
    .then(() => console.log(8)),

  Promise.resolve()
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11))
    .then(() => console.log(12))])