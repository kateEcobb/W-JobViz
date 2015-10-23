var GetReq = function(route){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: route,
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

var requests = {
  authenticate: function(){ 
    return GetReq('/api/auth');
  }, 
  getJobs: function(token){ 
    console.log('token in utils', token)
    return GetReq('/api/jobs?token=' + token);
  }
};

module.exports = requests;
