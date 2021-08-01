'use strict';

const formidable = require('formidable');
const AWS = require('aws-sdk');  // eslint-disable-line import/no-extraneous-dependencies

// accessKey = AWS.accessKeyId()
const s3 = new AWS.S3();

const bucketName = 'perfect-bucket'

const REGION = "us-east-1";

const bucketKey = 'dorimeadmin';

s3.createBucket({Bucket: bucketName}, function(err, data) {
  if (err) { console.log(err); }
  else {
    params = {Bucket: bucketName, Key: bucketKey, Body: 'Hello!'};

    s3.putObject(params, function(err, data) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Successfully uploaded data to bucketName/bucketKey");
      }
    });
  }
});


// module.exports.upload_csv = (event) => {
//   event.Records.forEach((record) => {
//     const filename = record.s3.object.key;
//     const time = 0 // time now
//     console.log(`New file .csv has been added to S3 bucket`);
//   });
// };


module.exports.update_csv = (event, context, callback) => {
  fetch(event.csv_url)
    .then((response) => {
      if(response.ok) {
        return response;
      }
      return Promise.reject(new Error(
        `Failed to fetch ${response.url}: ${response.status} ${response.statusText}`
      ));
      })
      .then(response => response.buffer())
      .then(buffer => (
        s3.putObject({
          Bucket: process.env.BUCKET,
          Key: event.key,
          Body: buffer,
        }).promise()
      )
    )
    .then(v => callback(null, v), callback);
};


module.exports.hello = async(event, context) => {

  var fs = require("fs");
  fs.readFile('csv_files/userdata.csv', (err, data) => {
    if (err) throw err;
    console.log(data);

    s3.putObject({
      Bucket: "perfect-bucket",
      Key: "some.csv",
      Body: data,
    }).promise()
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${(await message({
        time: 5,
        copy: `Your function executed successfully!`
      }))}`,
    }),
  };
};


module.exports.message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000
  )
);


module.exports.webhook = (event, context, callback) => {

  const S3 = new AWS.S3({

    s3ForcePathStyle: true,

    accessKeyId: 'dorimeadmin', // This specific key is required when working offline

    secretAccessKey: 'dorimeadmin',

    endpoint: new AWS.Endpoint('http://localhost:4569'),

  });

  S3.putObject({

    Bucket: 'perfect-bucket',

    Key: '1234',

    Body: new Buffer('abcd')

  }, () => {} );

};


module.exports.s3hook = (event, context) => {

  console.log(JSON.stringify(event));

  console.log(JSON.stringify(context));

  console.log(JSON.stringify(process.env));

};


module.exports.auth = async(event, context) => {

};
