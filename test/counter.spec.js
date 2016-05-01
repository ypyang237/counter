'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../app');

const agent = request.agent(app);

test('Counter API', (route)=> {

  route.test('GET /counter', (should)=>{
    const endpoint = '/counter';

    agent.get(endpoint)
      .expect(200, (err, res) =>{
        if(err){
          should.fail(err);
        }else{
          should.pass('/counter should return status 200');
        }
        should.end();
      });
  });
});