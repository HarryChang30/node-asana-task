'use strict';
const sinon = require('sinon');

const Comments = require('src/application/Comments/Comments');

describe('Create Comments', function() {
  let expect;
  let sandbox;

  this.beforeEach(async function() {
    const chai = await import('chai');
    expect = chai.expect;
    sandbox = sinon.createSandbox();
  });

  this.afterEach(function() {
    sandbox.restore();
  });
  
  const ExpectedComments = {
    task_id: 1,
    description: 'hello this is the test comments',
    attachment_url: '',
  };

  it('should create the comment success first', async function() {
    const comments = {
      task_id: 1,
      description: 'hello this is the test comments',
      attachment_url: '',
    };

    sandbox.stub(Comments, 'create').returns(ExpectedComments);
    const create = await Comments.create(comments);
    expect(create).to.eq(ExpectedComments);
  });

  it('should throw error when parameter is not send correctly', async function() {
    let error;
    const wrongComments = {
      task_id: 'one',
      description: 123,
      attachment_url: ''
    };

    try {
      await Comments.create(wrongComments);
    } catch (err) {
      error = err;
    }

    expect(error).to.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Get Comments By Task Id', function() {
  let expect;
  let sandbox;

  this.beforeEach(async function() {
    const chai = await import('chai');
    expect = chai.expect;
    sandbox = sinon.createSandbox();
  });

  this.afterEach(function() {
    sandbox.restore();
  });
  
  it('should get the data with type of array', async function() {
    const task_id = 1;
    
    const data = await Comments.getCommentsByTaskId(task_id);
    expect(data).to.be.an('array');
  });

  it('should throw error when param is not send correctly', async function() {
    let error;
    const task_id = 'one';

    
    
    try {
      await Comments.getCommentsByTaskId(task_id);
    } catch (err) {
      error = err;
    }

    expect(error).to.not.null;
    expect(error.message).to.eq('SequelizeDatabaseError');
  });
});