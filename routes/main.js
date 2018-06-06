'use strict';

const TestController = require('../Controllers/Test');

module.exports = (app, connection) => {
  // Default get request
  app.get('/', async (req, res) => {
    res.status(200).send('Hello world');
  });

  // Simple post request
  app.post('/test', async (req, res) => {
    res.status(200).json({ message: 'ok' });
  });

  // post request with data in body
  app.post('/test2', async (req, res) => {
    const data = req.body;

    res.status(200).json(data);
  });

  app.get('/test-controller', async (req, res) => {
    return await TestController.processRequestData(req, res);
  });

  app.post('/test-db', async (req, res) => {
    return await TestController.dbProcess(req, res, connection);
  });
};
