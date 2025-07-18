const axios = require('axios');
const apiClient_utils = {
  apiClient: axios.create({
    // We could set a default timeout or other configs here
    timeout: 10000,
  })
};
