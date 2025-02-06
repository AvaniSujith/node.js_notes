// npm - node package manager - HighlightRegistry, packages for node.js 

// There are mainly twwo types of dependencies that can be used - SIMPLE dependencies and DEVELOPMENT dependencies 

// slugify - more readable url is made - SIMPLE
// nodemon - DEVELOPMENT depenedency should add --save-dev

// versions numbers - set of three numbers. 
//   1. major version   - huge new release with lots of key feature chnage
//   2. minor version  - introduces new features but doesnt break code
//   3. patch version - bug fixing

// npm outdated - to get outdated packages 

// dont share node modules to git HTMLButtonElement, then install npm if cloned into it 


// Back-End Development - lesson 25

// client - e.g. browser   ---- REQUEST ----->    server 
//                         <--- RESPONSE ----

// HTTP request is sent from client to server the message looks like 
// GET /map HTTP/1.1        //start line
// host: www.google.com            //HTTP request header
// User-Agent: Mozilla/5.08
// Accept-language: en-US 

// <BODY>     //Request body

// dynamic websites -SERVER-SIDE RENDERED 
// API websites- CLIENT-SIDE RENDERED 

// V8 & libuv 

// event loop - most of the programs document. give 4 more individual threads 

// start - expired timer callbacks --> i/o polling and callbacks --> setimmediate callbacks  --> close callbacks      -------------->process.nextTick() queueMicrotask, other micortask queues 


// STREAMS -- used process(read and write) data piece by piece(chunks) without completing whole read or write operation 
// 1.READABLE STREAMS
// 2.WRITABLE STREAMS 
// 3.DUPLEX STREAMS
// 4.TRANSFORM STREAMS 


// MODULES -- resolving & loading ---> Wrapping ---> execution --> returning exports --> caching