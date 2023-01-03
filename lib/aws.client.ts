import AWS from 'aws-sdk';

const accessKeyId = process.env.PROJECT_AWS_ACCESS_KEY_ID || '';
const secretAccessKey = process.env.PROJECT_AWS_SECRET_ACCESS_KEY || '';
const region = process.env.PROJECT_AWS_REGION;

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
