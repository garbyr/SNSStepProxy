// Our Lambda function fle is required 
var index = require('./StepProxy.js');

// The Lambda context "done" function is called when complete with/without error
var context = {
    invokedFunctionArn: 'arn:aws:lambda:eu-west-1:437622887029:function:SNSStepProxy'
};

// Simulated S3 bucket event
var event = {
    Records: [
        {
            Sns: {
                Message: {
                    calculateSRRI: 'Yes',
                    requestUUID: 'abc123',
                    ISIN: 'x12345',
                    NAV: '0.123',
                    frequency: 'Weekly',
                    category: 'Market',
                    user: 'Gary',
                    calculationDate: '21/07/2017',
                    description: 'ICIN x12345'
                }
            }
        }
    ]
};

// Call the Lambda function
index.handler(event, context);