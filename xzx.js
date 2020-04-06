let AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        let data = await s3.listObjects({
            Bucket: "as2-test-lahiru",
            MaxKeys: 10
        }).promise();
        console.log("Succsecc")
        console.log(data)
    } catch (err) {
        // error handling goes here
        console.log("errrrrrr")
        console.log(err)
    };


    return { "message": "Successfully executed" };
};