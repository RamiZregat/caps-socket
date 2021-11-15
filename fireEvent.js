const io=require('socket.io-client')
let host = 'http://localhost:3030'
const capsSocket=io.connect(host);

const Client=require('./model/client');
const client=new Client;

capsSocket.emit('pickup',client)
capsSocket.emit('in-transit',client)
capsSocket.emit('delivered',client)

capsSocket.emit('events',client.orderID)
