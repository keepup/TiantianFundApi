const fundMSNMangerInfo = require('../src/module/fundMSNMangerInfo.js');

module.exports = async function handler(request, response) {
  const data = await fundMSNMangerInfo(request.query);
  response.status(200).json(data);
};