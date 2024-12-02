'use strict';
const sinon = require('sinon');

const Projects = require('src/application/Projects/Projects');

describe('Get Projects', async function() {
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

  const ExpectedProjects = {
    id: 2,
    name: 'Software Engineering Project',
    createdAt: new Date('2024-11-27 21:06:43.817 +0700'),
    updatedAt: new Date('2024-11-27 21:06:43.817 +0700'),
  };

  it('should return the projects when parameter send correctly', async function() {
    const project_id = 2;
    const data = await Projects.get(project_id);
    const result = JSON.stringify(data.dataValues);
    expect(result).to.be.eq(JSON.stringify(ExpectedProjects));
  });
});

describe('Create Projects', async function() {
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

  const ExpectedProjects = {
    id: 5,
    name: 'Unit Testing Projects',
    created_at: '2024-12-02',
    updated_at: '2024-12-02',
  };

  it('should create the projects successfully', async function() {
    const projects = {
      name: 'Unit Testing Projects'
    };

    sandbox.stub(Projects, 'create').returns(ExpectedProjects);
    const data = await Projects.create(projects);
    expect(data).to.eq(ExpectedProjects);
  });

  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongProjects = {};

    try {
      data = await Projects.create(wrongProjects);
    } catch(err) {
      error = err;
    }

    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Update Projects', async function() {
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

  const ExpectedProjects = {
    id: 5,
    name: 'Unit Testing Projects Update',
    created_at: '2024-12-02',
    updated_at: '2024-12-02',
  };

  it('should update the projects successfully', async function() {
    const projects = {
      name: 'Unit Testing Projects Update'
    };

    sandbox.stub(Projects, 'update').returns(ExpectedProjects);
    const data = await Projects.update(projects);
    expect(data).to.eq(ExpectedProjects);
  });

  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongProjects = {};

    try {
      data = await Projects.update(wrongProjects);
    } catch(err) {
      error = err;
    }

    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Delete Projects', async function() {
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

  it('should delete the projects successfully', async function() {
    const project_id = 2;

    sandbox.stub(Projects, 'delete').returns(1);
    const data = await Projects.delete(project_id);
    expect(data).to.eq(1);
  });

  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const project_id = 'abc';

    try {
      data = await Projects.delete(project_id);
    } catch(err) {
      error = err;
    }

    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('invalid input syntax for type integer: "abc"');
  });
});
