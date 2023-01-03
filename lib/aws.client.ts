import AWS from 'aws-sdk';

const accessKeyId = process.env.AWS_ACCESS_KEY_ID || '';
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || '';
const region = process.env.AWS_REGION;

export const createAWSClient = () => {
    AWS.config.update({
        credentials: {
            accessKeyId,
            secretAccessKey,
        },
        region,
    });

    return AWS;
};
