const label = require('./label');
const project = require('./project');
const task = require('./task');
const team = require('./team');
const user = require('./user');

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
