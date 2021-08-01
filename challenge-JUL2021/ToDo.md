# Author
[Valentina Solange Vispo](https://github.com/shirosweets)


  "devDependencies": {
    "serverless-offline": "^8.0.0"
  }

https://www.serverless.com/plugins/serverless-s3-local

aws configure --profile s3local

shirosweets@shiro:~/Desktop/Kew/challenge-JUL2021/challenge-JUL2021$ aws configure --profile s3local
AWS Access Key ID [None]: dorimeadmin
AWS Secret Access Key [None]: dorimeadmin
Default region name [None]: us-east-1
Default output format [None]:

npm install --save aws-sdk

----
~/tmp/userdata.csv

aws --endpoint http://localhost:4569 s3 cp challenge-JUL2021/csv_files/userdata.csv s3://perfect-bucket/userdata.csv --profile s3local



aws --endpoint http://localhost:4569 s3 cp ~/tmp/userdata.csv s3://perfect-bucket/userdata.csv --profile s3local


aws --endpoint http://localhost:3002 s3 cp /tmp/userdata.csv s3://perfect-bucket/userdata.csv --profile s3local

aws --endpoint http://localhost:4569 s3 cp /tmp/userdata.csv s3://perfect-bucket/userdata.csv --profile s3local


aws --endpoint http://localhost:4569 s3 cp /tmp/userdata.csv s3://perfect-bucket/userdata.csv --profile s3local

###

IMPORTANT NOTE: The permission allowing the authorizer function to be called by API Gateway must exist before deploying the stack, otherwise deployment will fail.


If you are creating the Cognito User Pool in the resources section of the same template, you can refer to the ARN using the Fn::GetAtt attribute from CloudFormation. To do so, you must give your authorizer a name and specify a type of COGNITO_USER_POOLS:

functions:
  create:
    handler: posts.create
    events:
      - http:
          path: posts/create
          method: post
          integration: lambda
          authorizer:
            name: MyAuthorizer
            type: COGNITO_USER_POOLS
            arn:
              Fn::GetAtt:
                - CognitoUserPool
                - Arn
---
resources:
  Resources:
    CognitoUserPool:
      Type: 'AWS::Cognito::UserPool'
      Properties: ...


      ----


---------

https://www.youtube.com/watch?v=ryPgWz6hbXo
https://www.youtube.com/watch?v=wYcBigiV0to
https://www.youtube.com/watch?v=lm7fn72eA8c
https://www.youtube.com/watch?v=ul_85jfM0oo

https://www.npmjs.com/package/serverless-offline
https://github.com/dherault/serverless-offline

https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

https://www.serverless.com/examples/

https://www.serverless.com/examples/aws-node-upload-to-s3-and-postprocess
https://www.serverless.com/examples/aws-node-simple-transcribe-s3
https://www.serverless.com/examples/aws-node-rekognition-analysis-s3-image
https://www.serverless.com/examples/aws-ffmpeg-layer
https://www.serverless.com/examples/aws-node-fetch-file-and-store-in-s3


https://github.com/serverless/examples/tree/master/aws-node-fetch-file-and-store-in-s3

https://github.com/serverless/examples/blob/master/aws-node-fetch-file-and-store-in-s3/handler.js

https://github.com/serverless/examples/blob/master/aws-node-fetch-file-and-store-in-s3/package.json

https://github.com/serverless/examples/blob/master/aws-node-fetch-file-and-store-in-s3/serverless.yml

https://github.com/serverless/examples/blob/master/aws-ffmpeg-layer/handler.js

https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html

https://aws.amazon.com/sdk-for-javascript/

https://docs.aws.amazon.com/s3/?id=docs_gateway

https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-userguide.pdf

https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascriptv3/example_code/nodegetstarted/README.md

https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html

https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/js-sdk-dg.pdf#getting-started-nodejs

https://www.youtube.com/watch?v=uNjyopVYqHU

https://www.youtube.com/watch?v=JLBcFO8j9AU

https://www.youtube.com/watch?v=noPkECY92yE

https://www.serverless.com/framework/docs/configuration-validation/

https://github.com/serverless/examples/blob/master/aws-node-upload-to-s3-and-postprocess/handler.js

https://github.com/serverless/examples/blob/master/aws-node-upload-to-s3-and-postprocess/handler.js

https://www.w3schools.com/js/js_strict.asp

https://data.world/alexandra/compound-health-effects-database

https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp

https://www.netlify.com/blog/2016/11/17/serverless-file-uploads/

https://stackoverflow.com/questions/66810222/serverless-s3-local-writing-to-real-s3-bucket

https://github.com/dherault/serverless-offline/issues/464

https://github.com/ar90n/serverless-s3-local/issues/48

https://www.serverless.com/plugins/serverless-s3-local

https://github.com/serverless/components/issues/860




https://www.youtube.com/watch?v=vT8-4e_W1_0

https://www.youtube.com/watch?v=bPd7z_5NM-8

https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/

https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#SSS-Invoke-request-InvocationType

https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html

https://docs.aws.amazon.com/apigateway/api-reference/resource/rest-api/#apiKeySource

https://www.serverless.com/framework/docs/providers/aws/events/apigateway/#enabling-cors

https://github.com/serverless/serverless

https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3.html

https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html

https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations_Amazon_Simple_Storage_Service.html

https://aws.amazon.com/lambda/

https://github.com/serverless-heaven/serverless-webpack/

https://www.serverless.com/framework/docs/providers/aws/events/s3/

https://www.npmjs.com/package/serverless-offline-s3

https://github.com/minio/minio

https://www.npmjs.com/package/serverless-offline#token-authorizers

https://github.com/serverless/examples/blob/master/aws-node-upload-to-s3-and-postprocess/serverless.yml

https://www.serverless.com/examples/openwhisk-node-simple-http-endpoint

https://www.serverless.com/examples/

https://github.com/serverless/examples/blob/master/aws-node-websockets-authorizers/handler.js

https://github.com/serverless/examples/blob/master/aws-node-websockets-authorizers/serverless.yml

https://github.com/dherault/serverless-offline/tree/master/examples/lambda-invoke

https://github.com/dherault/serverless-offline#usage-and-command-line-options

