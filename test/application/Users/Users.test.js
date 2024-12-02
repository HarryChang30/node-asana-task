'use strict';

const sinon = require('sinon');

const Users = require('src/application/Users/Users');

describe('Create Users', async function() {
  let expect;
  let sandbox;
  
  this.beforeEach(async function() {
    const chai = await import('chai');
    expect = chai.expect;
    sandbox = sinon.createSandbox();
  });
        
  this.afterEach(async function() {
    sandbox.restore();
  });
  
  const ExpectedUsers = {
    id: 1,
    name: 'Data Teams',
    createdAt: new Date('2024-12-02'),
    updatedAt: new Date('2024-12-02'),
  };
  
  it('should create the users successfully', async function() {
    const users = {
      username: 'hello',
      password: 'hello123',
      name: 'hello12345',
    };
  
    sandbox.stub(Users, 'create').returns(ExpectedUsers);
    const data = await Users.create(users);
    expect(data).to.eq(ExpectedUsers);
  });
  
  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTeams = {};
  
    try {
      data = await Users.create(wrongTeams);
    } catch (err) {
      error = err;
    }
  
    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Login', async function() {
  let expect;
  let sandbox;
        
  this.beforeEach(async function() {
    const chai = await import('chai');
    expect = chai.expect;
    sandbox = sinon.createSandbox();
    process.env.JWT_SECRET_KEY = 'abc';
  });
        
  this.afterEach(async function() {
    sandbox.restore();
  });
          
  it('should return the data when parameter send correctly', async function() {
    const user = {
      username: 'harrychang',
      password: 'harry123'
    };
    const data = await Users.login(user);
    expect(data).to.be.not.null;
    expect(data).to.have.property('id');
    expect(data).to.have.property('token');
  });
});