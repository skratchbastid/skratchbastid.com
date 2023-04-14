// const AWS = require('aws-sdk')

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   })
// exports.handler = async function(event, context) {
//     const bucket = event.queryStringParameters.bucket
//     const key = event.queryStringParameters.key
//     const oldKey = '10 Can You Feel It.mp3'

//     try {
//         const params = {
//           Bucket: bucket,
//           Key: key,
//           Expires: 60 * 60,
//         }
  
//         const signedUrl = await s3.getSignedUrlPromise('getObject', params);
//         return {
//             statusCode: 200,
//             headers: {
                
//             },
//             body: JSON.stringify({
//                 status: 200,
//                 message: signedUrl
//             })
//         }
//       } catch (error) {
//         console.log(error)
//         throw error;
//       }
// }