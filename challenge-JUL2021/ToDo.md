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