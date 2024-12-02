'use strict';

const sinon = require('sinon');

const Teams = require('src/application/Teams/Teams');

describe('Create Teams', async function() {
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

  const ExpectedTeams = {
    id: 1,
    name: 'Data Teams',
    createdAt: new Date('2024-12-02'),
    updatedAt: new Date('2024-12-02'),
  };

  it('should create the teams successfully', async function() {
    const teams = {
      name: 'Data Teams'
    };

    sandbox.stub(Teams, 'create').returns(ExpectedTeams);
    const data = await Teams.create(teams);
    expect(data).to.eq(ExpectedTeams);
  });

  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTeams = {};

    try {
      data = await Teams.create(wrongTeams);
    } catch (err) {
      error = err;
    }

    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Assign Teams', async function() {
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

  const ExpectedTeamGroups = {
    id: 1,
    team_id: 3,
    user_id: '6a926226-ab7e-430b-9eb3-4ff4bfe6c379',
    createdAt: new Date('2024-12-02'),
    updatedAt: new Date('2024-12-02'),
  };

  it('should create the teams successfully', async function() {
    const teamGroups = {
      team_id: 3,
      user_id: '6a926226-ab7e-430b-9eb3-4ff4bfe6c379'
    };
    
    sandbox.stub(Teams, 'assign').returns(ExpectedTeamGroups);
    const data = await Teams.assign(teamGroups);
    expect(data).to.eq(ExpectedTeamGroups);
  });
    
  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTeamGroups = {};
    
    try {
      data = await Teams.assign(wrongTeamGroups);
    } catch (err) {
      error = err;
    }
    
    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Assign Team Projects', async function() {
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
  
  const ExpectedTeamProjects = {
    id: 1,
    team_id: 3,
    project_id: 2,
    createdAt: new Date('2024-12-02'),
    updatedAt: new Date('2024-12-02'),
  };
  
  it('should create the teams successfully', async function() {
    const teamProjects = {
      team_id: 3,
      project_id: 2,
    };
      
    sandbox.stub(Teams, 'assign_project').returns(ExpectedTeamProjects);
    const data = await Teams.assign_project(teamProjects);
    expect(data).to.eq(ExpectedTeamProjects);
  });
      
  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTeamProjects = {};
      
    try {
      data = await Teams.assign_project(wrongTeamProjects);
    } catch (err) {
      error = err;
    }
      
    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Assign Team Projects', async function() {
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
    
  const ExpectedTeamProjects = {
    id: 1,
    team_id: 3,
    project_id: 2,
    createdAt: new Date('2024-12-02'),
    updatedAt: new Date('2024-12-02'),
  };
    
  it('should create the teams successfully', async function() {
    const teamProjects = {
      team_id: 3,
      project_id: 2,
    };
        
    sandbox.stub(Teams, 'assign_project').returns(ExpectedTeamProjects);
    const data = await Teams.assign_project(teamProjects);
    expect(data).to.eq(ExpectedTeamProjects);
  });
        
  it('should throw error if parameter not send correctly', async function() {
    let error;
    let data;
    const wrongTeamProjects = {};
        
    try {
      data = await Teams.assign_project(wrongTeamProjects);
    } catch (err) {
      error = err;
    }
        
    expect(data).to.be.undefined;
    expect(error).to.be.not.null;
    expect(error.message).to.eq('ValidationError');
  });
});

describe('Get Team Groups by User Id', async function() {
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

  const expectedData = {
    id: 1,
    team_id: 2,
    user_id: '50f5ade2-e055-4bd0-9e16-9bf467d47a17',
    createdAt: new Date('2024-12-01T09:23:18.547Z'),
    updatedAt: new Date('2024-12-01T09:23:18.547Z')
  };
      
  it('should return the data when parameter send correctly', async function() {
    const user_id = '50f5ade2-e055-4bd0-9e16-9bf467d47a17';
    const data = await Teams.get_groupTeam_by_user_id(user_id);
    const result = JSON.stringify(data.dataValues);
    expect(data).to.be.not.null;
    expect(result).to.be.eq(JSON.stringify(expectedData));
  });
});

describe('Get Team Projects by Team Id', async function() {
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
  
  const expectedData = {
    id: 1,
    team_id: 2,
    project_id: 2,
    createdAt: new Date('2024-12-01T09:23:49.298Z'),
    updatedAt: new Date('2024-12-01T09:23:49.298Z')
  };
        
  it('should return the data when parameter send correctly', async function() {
    const team_id = 2;
    const data = await Teams.get_projectTeam_by_team_id(team_id);
    const result = JSON.stringify(data.dataValues);
    expect(data).to.be.not.null;
    expect(result).to.be.eq(JSON.stringify(expectedData));
  });
});