var apiKey = require('../../.tokens.js').api_key; 
var secret = require('../../.tokens.js').secret_key;

var GetReq = function(route, token){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: route + token,
      method: 'GET',
      contentType: 'application/json',
      success: function(data) {
        resolve(data);
      },
      error: function(xhr, status, err) {
        reject(err);
      }
    });
  });
};

var PostReq = function(route){ 
  return new Promise(function(resolve, reject) {
      $.ajax({
        url: route,
        method: 'POST',
        data: $.param({api_key: apiKey, secret_key: secret}),
        success: function(data) {
          resolve(data);
        },
        error: function(xhr, status, err) {
          reject(err);
        }
      });
    });
}; 

var requests = {
  authenticate: function(){ 
    return PostReq('https://api.wonolo.com/api_v2/authenticate');
  }, 
  getJobs: function(token){ 
    return GetReq('http://api.wonolo.com/api_v2/job_requests?token=', token);
  }
};

module.exports = requests;
