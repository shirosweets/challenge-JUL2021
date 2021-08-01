# Challenge - JUL2021

Objetive:
> 

# Instructions
**Develop a API Restful:**
- That allows, by means of a method, to attach a single file of type .csv and store it in a container of type Bucket S3.

#

Install [Serverless Offline](https://www.npmjs.com/package/serverless-offline):
> `npm install serverless-offline --save-dev`

> Nodejs Version>=16.5.0

# How to run

**Local function**
```bash
$ serverless invoke local --function hello
```

```bash
$ serverless offline start
```

## Testing

```bash
$ npm test
```

# How to deploy

```bash
$ serverless deploy
```

# Commands

> `aws configure list`

# Refences
- [Serverless](https://www.serverless.com/)
- [Postman - Automated testing](https://www.postman.com/automated-testing/)
- [CORS](https://serverless.com/framework/docs/providers/aws/events/apigateway#enabling-cors)
- [S3](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)
- [S3 Limits](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html)
- [UserGuide: S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-userguide.pdf)

Serverless Environment Information ---------------------------
    Operating System:          linux
    Node Version:              14.4.0
    Framework Version:         2.52.1 (standalone)
    Plugin Version:            5.4.3
    SDK Version:               4.2.5
    Components Version:        3.14.0


# 

npm i serverless-offline

npm install serverless-offline --save-dev

npm install serverless-s3-local --save-dev

sls plugin install --name serverless-s3-local

---

npm install serverless-offline-s3 --save-dev

"serverless-offline-s3": "^4.2.0",

# New install

npm install --save-dev serverless-offline


---

sudo npm i -g serverless-offiline

npm install -g npm@7.20.3

sls offline start

> Serverless plugin "serverless-webpack" not found. Make sure it's installed and listed in the "plugins" section of your serverless config file.

sudo npm i -g serverless-webpack

npm install --save-dev serverless-webpack

# 3hs