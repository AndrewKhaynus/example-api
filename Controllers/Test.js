'use strict';
const processRequestData = async (req, res) => {
//   Some logic
//  or debug
  console.log(req.headers);
  return res.status(200).send('Done');
};

module.exports = { processRequestData };
