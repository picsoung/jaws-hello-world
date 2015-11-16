/**
 * AWS Module: Action: Modularized Code
 */
 var threescale = require('awsm-3scale').threescale;
// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  threescale.authenticate(event.user_key,function(err,res){
     if(res){
       context.succeed({"message":"Hello World"});
     }else{
       context.fail("error, not authorized");
     }
   });
};

// Your Code
var action = function() {
  return {message: 'Your JAWS lambda executed successfully!'};
};
