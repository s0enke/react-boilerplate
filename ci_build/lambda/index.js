var codepipeline = new AWS.CodePipeline();
var lambda = new AWS.Lambda();
var s3 = new AWS.S3({maxRetries: 10, signatureVersion: "v4"});

// run npm
exports.npmHandler = function( event, context ) {
    doAction(npmAction, event, context);
};
