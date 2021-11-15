'use strict';
const Client= require('../model/client');

const io =require('socket.io-client');
let host='http://localhost:3030';
const capsSocket=io.connect(host);

describe('logger middleware', ()=>{
  let consoleSpy;
  const payload = new Client;

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=>{
    consoleSpy.mockRestore();
  });


  xit('pickup', ()=>{
    capsSocket.emit('pickup',payload)
    // expect(consoleSpy).toBeCalled()
    expect(consoleSpy).toBeCalledWith('EVENT',{
        event:'pickup',
        time: new Date,
        payload,
    })
  });
});