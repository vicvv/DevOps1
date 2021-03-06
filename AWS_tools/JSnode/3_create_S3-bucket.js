var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users
var myBucket = 'node-sdk-demo-sdk';
var myKey = 'myBucketKey';

s3.createBucket({Bucket: myBucket}, function(err, data) {

if (err) {
    console.log(err);
   } else {
     params = {Bucket: myBucket, Key: myKey, Body: 'Hello!'};
     s3.putObject(params, function(err, data) {

         if (err) {
             console.log(err)
         } else {
             console.log("Successfully uploaded data to myBucket/myKey");
         }
      });
   }
});