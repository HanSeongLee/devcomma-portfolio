import nodemailer from 'nodemailer';
import { createAWSClient } from 'lib/aws.client';

const AWS = createAWSClient();
export const transporter = nodemailer.createTransport({
    SES: new AWS.SES({
        apiVersion: '2010-12-01',
    }),
});
