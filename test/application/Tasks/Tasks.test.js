'use strict';
const sinon = require('sinon');

const Tasks = require('src/application/Tasks/Tasks');

describe('Create Tasks', async function() {
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
  
  const ExpectedTasks = {
    id: 5,
    project_id: 2,
    user_id: '50f5ade2-e055-4bd0-9e16-9bf467d47a17',
    due_date: new Date('2024-12-31'),
    title: 'This is the first task of software engineering',
    description: 'description of software engineering',
    priority: 'LOW',
    status: 'TO-DO',
  };
  
  it('should create the tasks successfully', async function() {
    const tasks = {
      project_id: 2,
      user_id: '50f5ade2-e055-4bd0-9e16-9bf467d47a17',
      title: 'This is the first task of software engineering',
      description: 'description of software engineering',
      priority: 'LOW',
      status: 'TO-DO',
    };
  
    sandbox.stub(Tasks, 'create').returns(ExpectedTasks);
    const data = await Tasks.create(tasks);
    expect(data).to.eq(ExpectedTasks);
  });
  
  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTasks = {};
  
    try {
      data = await Tasks.create(wrongTasks);
    } catch(err) {
      error = err;
    }
  
    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Update Tasks', async function() {
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
    
  const ExpectedTasks = {
    id: 5,
    project_id: 2,
    user_id: '50f5ade2-e055-4bd0-9e16-9bf467d47a17',
    due_date: new Date('2024-12-31'),
    title: 'This is the first task of software engineering',
    description: 'description of software engineering',
    priority: 'HIGH',
    status: 'TO-DO',
  };
    
  it('should update the tasks successfully', async function() {
    const tasks = {
      project_id: 2,
      user_id: '50f5ade2-e055-4bd0-9e16-9bf467d47a17',
      title: 'This is the first task of software engineering',
      description: 'description of software engineering',
      priority: 'HIGH',
      status: 'TO-DO',
    };
    
    sandbox.stub(Tasks, 'update').returns(ExpectedTasks);
    const data = await Tasks.update(tasks);
    expect(data).to.eq(ExpectedTasks);
  });
    
  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTasks = {};
    
    try {
      data = await Tasks.update(wrongTasks);
    } catch(err) {
      error = err;
    }
    
    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Get Tasks', async function() {
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
  
  const ExpectedTasks = {
    id: 1,
    project_id: 2,
    user_id: '50f5ade2-e055-4bd0-9e16-9bf467d47a17',
    due_date: new Date('2024-11-30'),
    title: 'This is the first task of software engineering',
    description: 'description of software engineering',
    priority: 'MEDIUM',
    status: 'TO-DO',
    createdAt: new Date('2024-11-30T13:29:54.952Z'),
    updatedAt: new Date('2024-11-30T13:43:48.285Z'),
  };
  
  it('should return the projects when parameter send correctly', async function() {
    const task_id = 1;
    const data = await Tasks.getById(task_id);
    const result = JSON.stringify(data.dataValues);
    expect(result).to.be.eq(JSON.stringify(ExpectedTasks));
  });
});

describe('Get All Tasks by Project Id', async function() {
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
    
  it('should return the projects when parameter send correctly', async function() {
    const project_id = 2;
    const data = await Tasks.getAllTasksByProjectId(project_id);
    expect(data).to.be.an('array');
    expect(data).to.be.not.null;
  });
});