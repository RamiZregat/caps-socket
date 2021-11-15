const io =require('socket.io-client');

let host='http://localhost:3030';

const capsSocket=io.connect(host);

capsSocket.on('in-transit',(payload)=>{
    console.log(`pickup ${payload}`);
    console.log(`delivered ${payload}`);
})

