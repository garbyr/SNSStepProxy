let AWS = require('aws-sdk');  
let stepfunctions = new AWS.StepFunctions();

module.exports.invoke = function(event, context, callback) {  
  let accountId = context.invokedFunctionArn.split(':')[4];
  let params = {
    stateMachineArn: `arn:aws:states:us-east-1:${accountId}:stateMachine:`+stateMachine,
    input: event.input,
  };
  stepfunctions.startExecution(params, callback);
};