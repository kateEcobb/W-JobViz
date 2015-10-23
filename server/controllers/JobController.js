var request = require('request');

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production'){ 
  var apikey = process.env.api_key;
  var secret = process.env.secret_key;
} else { 
  var apikey = require('../../.tokens.js').api_key; 
  var secret = require('../../.tokens.js').secret_key;
}

var getAllJobs = function(req, res){ 
    var options = { 
      url: 'http://api.wonolo.com/api_v2/job_requests?token='+req.query.token,
      method: 'GET'
    };
    request(options, function(err, response, body){ 
      res.status(200).send(JSON.parse(body));
    });
}; 

var authenticate = function(req, res){ 
    var options = { 
      url: 'https://api.wonolo.com/api_v2/authenticate',
      method: 'POST', 
      formData: {api_key: apikey, secret_key: secret}
    };
    request(options, function(err, response, body){ 
      res.status(200).send(JSON.parse(body));
    });
};

module.exports = { 
  getAllJobs: getAllJobs, 
  authenticate: authenticate
};