let AWS = require('aws-sdk');  
let stepfunctions = new AWS.StepFunctions();

module.exports.invoke = function(event, context, callback) {  
  let accountId = context.invokedFunctionArn.split(':')[4];
  var messageObj = event.Records[0].Sns.Message;
  var message = JSON.parse(messageObj);

  //hardcode statemachine for now, should be parameter passed in via SNS
  let params = {
    stateMachineArn: `arn:aws:states:us-east-1:${accountId}:stateMachine:`+NAVCSVProcessV0_1,
    input: event.message,
  };
  console.log("params");

  //stepfunctions.startExecution(params, callback);
};