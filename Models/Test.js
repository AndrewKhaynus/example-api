'use strict';
const requestData = connection => {
  connection.connect();

  // DB processes are asynchronous, so to "fix" this behavior, we use promises.
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM test', (err, result) => {
      if (err) return reject();
      resolve(result);
    });
  });
};

module.exports = { requestData };
