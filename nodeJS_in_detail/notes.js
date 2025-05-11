//***************Node.JS**************
// Node.js - javascript runtime engine.
// *fast and highly-scalable
// *data-intensive apps
// *single threaded

// USES
// *data streaming - utube
// *API
// *Real-time chat application
// *Server-side web application
// web server can run without external browser support using Node.js
// npm - library of open-source packages available for everyone for free and easily for use
// npm start is used to start node

// 31-01-2025

// can execute Node.js files effectively in tereminal.
// to exit the terminal  -- .exit
// to clear terminal - ctrl + k
// hit tab to get all variables

// 2+2
// 4
// _+4  _ mentions the result in previous operation
// 8

// lesson - 7

// const hello = 'Hello world';
// console.log(hello);

// how to run it in terminal Node. ------ node filename
// how to convert above to a bit complicated
// using Node,js we can read and write files in filesystem unlike js

// const fs = require('fs')

// const hello = 'hello world';
// console.log(hello);

// Lesson 8- read and write file using Node.js

// const fs = require('fs');

// // fs.readFileSync( "path of file to be reading", "character")

// // fs.readFileSync(".FileSystem/input.txt", 'utf-8');

// // we should save the file to a variable

// const textIn = fs.readFileSync("D:\files\Full Stack\Node.js\FileSystem", 'utf-8');
// console.log(textIn)

// how to read the contents of a file into the terminal

// const fs = require('fs');
// const textIn = fs.readFileSync("./input.txt", 'utf-8');
// console.log(textIn);

// how to run the file in terminal

// cd "D:\files\Full Stack\Node.js" ----- cd path
// node notes.js

// how to write something into the file

// const fs = require('fs');
// const { endianness } = require('os');

// const textIn = fs.readFileSync("./input.txt", 'utf-8');
// console.log(textIn);

// const textOut = `Hello How are you. Lets learn about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./output.txt', textOut);
// console.log('File written!');

// lesson - 9 blocking and non-blocking: Asynchronous nature of Node.js

// synchronous code is also called blocking code. Each lines of code waits for the previous code line to execute , asynchronous/non-blocking code
// In asynchronous connected, call back function exits
// Node.js is executed in a single thread
// using callbacks into code doesnt really make the code asynchronous

// ----------------CALLBALL HELL----------------
// a triangle is visible. at left end
// ***SOLUTION*** Using Promises or async/await.

// asynchronous and synchronous method

// const fs = require('fs');

// ***************Blocking, synchronous way*****************
// const textIn = fs.readFileSync("./input.txt", 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about Avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./output1.txt', 'uft-8');
// console.log('File Written');

// *****************Non-blocking, asynchronous way***************

// fs.readFile('./start.txt', 'utf-8', (err, data1)=>{                        // arrow function doesnt get itself a "this" keyword.

//     if (err) return console.log('ERROR!');

//     // console.log(data1);
//     fs.readFile(`.${data1}.txt`, 'utf-8', (err, data2) =>{
//         console.log(data2)
//         fs.readFile(`./append.txt`, 'utf-8', (err, data3) =>{
//             console.log(data3);

//             fs.writeFile('./final.txt', `${data2}\n`, 'utf-8', err =>{
//                 console.log('FIle has been written');
//             });
//         });
//     });
// });

// console.log('Will read file');

// function(err, data){

// }

// const fs = require('fs');

// fs.readFile('./start.txt', 'utf-8', (err, data1) => {
//     if (err) {
//         console.error("Error reading start.txt:", err);
//         return;
//     }
//     console.log("Data from start.txt:", data1);

//     const fileName = `.${data1}.txt`.trim(); // Trim to avoid newline issues

//     fs.readFile(fileName, 'utf-8', (err, data2) => {
//         if (err) {
//             console.error(`Error reading ${fileName}:`, err);
//             return;
//         }
//         console.log("Data from second file:", data2);

//         fs.readFile('./append.txt', 'utf-8', (err, data3) => {
//             if (err) {
//                 console.error("Error reading append.txt:", err);
//                 return;
//             }
//             console.log("Data from append.txt:", data3);
//         });
//     });
// });

// console.log('Will read file');

// Lesson- 11 - Creating Simple Web Server

// const { pbkdf2 } = require('crypto');
// const fs = require('fs');
// const http = require('http');
// const { platform } = require('os');
// const { join } = require('path');
// const { ppid } = require('process');

// // ************SERVER************
// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.end('Hello from the server!');
// });

// server.listen(8000, '127.0.0.1', ()=>{                    //port - sub-address, local host - computer in whihc program currently running.
//     console.log('Listening to request on port 8000');
// });

// LESSON -12 routing

// routing - implement different access / url , changes on clicks

// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) =>{
//     const pathName = req.url;

//     if(pathName === '/overview'){
//         res.end('This is the OVERVIEW');

//     }else if(pathName === '/product'){
//         res.end('This is Product');
//     }else{
//         res.writeHead(404, {
//             'Content-type': 'text',
//             'my-own-header':'hello-world'
//         });
//         // res.end('Page not found');
//         res.end('<h1>Page not found</h1>');
//     }
// });

// server.listen(8000, '127.0.0.1', () =>{
//     console.log('Listening to request at port 8000')
// });

// lesson - 13 Simple API

// const fs = require('fs');
// const http = require('http');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const url = require('url');

// const server = http.createServer((req, res) =>{
//     const pathName = req.url;

//     if(pathName === '/' || pathName === '/overview'){

//         res.end('This is the OVERVIEW');

//     }else if(pathName === '/product'){

//         res.end('This is the PRODUCT');

//     }else if(pathName === '/api'){

//         fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) =>{
//             const productDetails = JSON.parse(data);
//             // console.log(productDetails);

//         });

//         res.end('API');
//     }else{

//         res.writeHead(404, {
//             'Content-type' : 'text/html',
//             'my-own-header': 'hello-world'
//         });

//         res.end('<h1>Page not foundd</h1>');
//     }
// });

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('Listening to request at port 800');
// });

// lesson - 14

// all templates built

// lesson - 15

// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const slugify = require('slugify');
// const replaceTemplate = require('./modules/replaceTemplate');

// const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
// console.log(slugs);

// const server = http.createServer((req, res) => {
// const { query, pathname } = url.parse(req.url, true);

//     // Overview page
// if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, {
//     'Content-type': 'text/html'
//     });

//     const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
//     const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//     res.end(output);

//     // Product page
// } else if (pathname === '/product') {
//     res.writeHead(200, {
//     'Content-type': 'text/html'
//     });
//     const product = dataObj[query.id];
//     const output = replaceTemplate(tempProduct, product);
//     res.end(output);

//     // API
// } else if (pathname === '/api') {
//     res.writeHead(200, {
//     'Content-type': 'application/json'
//     });
//     res.end(data);

//     // Not found
// } else {
//     res.writeHead(404, {
//     'Content-type': 'text/html',
//     'my-own-header': 'hello-world'
//     });
//     res.end('<h1>Page not found!</h1>');
// }
// });

// server.listen(8000, '127.0.0.1', () => {
// console.log('Listening to requests on port 8000');
// });

// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//     output = output.replace(/{%IMAGE%}/g, product.image);
//     output = output.replace(/{%PRICE%}/g, product.price);
//     output = output.replace(/{%FROM%}/g, product.from);
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%}/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%}/g, product.description);
//     output = output.replace(/{%ID%}/g, product.id);

//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
//     return output;
// }

// const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const server = http.createServer((req, res) =>{
//     // console.log(req.url);
//     // console.log(url.parse(req.url, true))
//     // const pathName = req.url;

//     const {query, pathname} = url.parse(req.url, true)

//     if(pathname === '/' || pathname === '/overview'){
//         res.writeHead(200, {'Content-type': 'text/html'});

//         const cardsHtml = dataObj.map(el =>  replaceTemplate(tempCard, el)).join('');
//         // console.log(cardsHtml)
//         const output = tempOverview.replace('{%PRODUCT_CARDS%', cardsHtml);

//         res.end(output);

//     }else if(pathname === '/product'){
//         res.writeHead(200, {'Content-type': 'text/html'});
//         const product = dataObj[query.id];
//         const output = replaceTemplate(tempProduct, product);
//         // res.end('This is the PRODUCT');
//         res.end(output);

//     }else if(pathname === '/api'){

//         // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) =>{
//         //     const productDetails = JSON.parse(data);
//         //     // console.log(productDetails);

//         // });

//         // res.end('API');

//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(data);
//     }else{

//         res.writeHead(404, {
//             'Content-type' : 'text/html',
//             'my-own-header': 'hello-world'
//         });

//         res.end('<h1>Page not foundd</h1>');
//     }
// });

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('Listening to request at port 800');
// });

// lesson - 17

// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const replaceTemplate = require('./modules/replaceTemplate')    //. means current location

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//     output = output.replace(/{%IMAGE%}/g, product.image);
//     output = output.replace(/{%PRICE%}/g, product.price);
//     output = output.replace(/{%FROM%}/g, product.from);
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%}/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%}/g, product.description);
//     output = output.replace(/{%ID%}/g, product.id);

//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
//     return output;
// }

// const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const server = http.createServer((req, res) =>{
// console.log(req.url);
// console.log(url.parse(req.url, true))
// const pathName = req.url;

//     const {query, pathname} = url.parse(req.url, true)

//     if(pathname === '/' || pathname === '/overview'){
//         res.writeHead(200, {'Content-type': 'text/html'});

//         const cardsHtml = dataObj.map(el =>  replaceTemplate(tempCard, el)).join('');
//         // console.log(cardsHtml)
//         const output = tempOverview.replace('{%PRODUCT_CARDS%', cardsHtml);

//         res.end(output);

//     }else if(pathname === '/product'){
//         res.writeHead(200, {'Content-type': 'text/html'});
//         const product = dataObj[query.id];
//         const output = replaceTemplate(tempProduct, product);
//         // res.end('This is the PRODUCT');
//         res.end(output);

//     }else if(pathname === '/api'){

//         // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) =>{
//         //     const productDetails = JSON.parse(data);
//         //     // console.log(productDetails);

//         // });

//         // res.end('API');

//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(data);
//     }else{

//         res.writeHead(404, {
//             'Content-type' : 'text/html',
//             'my-own-header': 'hello-world'
//         });

//         res.end('<h1>Page not foundd</h1>');
//     }
// });

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('Listening to request at port 800');
// });

// lesson - 20

// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// const slugify = require('slugify');

// const replaceTemplate = require('./modules/replaceTemplate');

// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/overview.html`,
//   'utf-8'
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,
//   'utf-8'
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/product.html`,
//   'utf-8'
// );

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
// // console.log(slugs);

// // console.log(slugify('Fresh Avocados', { lower: true }));

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);

//   if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, { 'Content-type': 'text/html' });

//     const cardsHtml = dataObj
//       .map((el) => replaceTemplate(tempCard, el))
//       .join('');
//     // console.log(cardsHtml)
//     const output = tempOverview.replace('{%PRODUCT_CARDS%', cardsHtml);

//     res.end(output);
//   } else if (pathname === '/product') {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     const product = dataObj[query.id];
//     const output = replaceTemplate(tempProduct, product);
//     res.end(output);
//   } else if (pathname === '/api') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(data);
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'my-own-header': 'hello-world',
//     });

//     res.end('<h1>Page not foundd</h1>');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to request at port 8000');
// });


// *********NEW SERIES*************

// nodejs - javascript runtime environment

