'use strict';

const Test = require('../Models/Test');

const processRequestData = async (req, res) => {
//   Some logic
//  or debug
  console.log(req.headers);
  return res.status(200).send('Done');
};

const dbProcess = async (req, res, connection) => {
  const testData = await Test.requestData(connection);

  return res.status(200).json(testData);
};

module.exports = { processRequestData, dbProcess };
