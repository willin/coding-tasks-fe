const label = require('../mock/label');
const project = require('../mock/project');
const task = require('../mock/task');
const team = require('../mock/team');
const user = require('../mock/user');

module.exports = (app) => {
  app.get('/api/label', (req, res) => {
    res.json(label);
  });
  app.get('/api/project', (req, res) => {
    res.json(project);
  });
  app.get('/api/task', (req, res) => {
    res.json(task);
  });
  app.get('/api/team', (req, res) => {
    res.json(team);
  });
  app.get('/api/user', (req, res) => {
    res.json(user);
  });
};
