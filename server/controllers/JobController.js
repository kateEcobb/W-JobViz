var request = require('request');

module.exports = { 
  getAllJobs: function(req, res){ 
    var options = { 
      url: 'test',
      method: 'GET'
    };
    request(options, function(err, response, body){ 
      res.status(200).send(JSON.parse(body));
    });
  }, 

  authenticate: function(req,res){ 
    var options = { 
      url: 'test',
      method: 'GET'
    };
    request(options, function(err, response, body){ 
      res.status(200).send(JSON.parse(body));
    });
  }

};