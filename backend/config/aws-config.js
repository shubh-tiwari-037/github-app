
const AWS=require("aws-sdk");

// AWS.config.update({region:"ap-south-1"});
AWS.config.update({
   region: "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3= new AWS.S3();
const S3_BUCKET="shubhgithubbucket";

module.exports={s3,S3_BUCKET}















// {
//   "Version": "2012-10-17",
//   "Statement": [
//     {
//       "Effect": "Allow",
//       "Principal": {
//         "AWS": "arn:aws:iam::357621881771:user/shubhgithub"
//       },
//       "Action": "s3:*",
//       "Resource": [
//         "arn:aws:s3:::shubhgithubbucket",
//         "arn:aws:s3:::shubhgithubbucket/*"
//       ]
//     }
//   ]
// }