// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs';
import { createClient } from 'lib/sheet.client';
import { nanoid } from 'nanoid';
import { validate } from 'lib/middlewares/validation';
import connect from 'next-connect';
import Joi from 'joi';
import { slackBotClient } from 'lib/slack.client';
import { transporter } from 'lib/nodemailer.client';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
});

const post = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { name, email, message } = req.body;

    const db = await createClient();
    const contactTable = db.getTable('Contact');
    const id = nanoid();
    const now = new Date();
    const timestamp = now.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
    });

    await contactTable.insertOne({
        id,
        name,
        email,
        message,
        timestamp,
    });

    const emailContents = `We just got a form submission from you!
    
    * Name: ${name}
    * Email: ${email}
    * Message: ${message}
    
    Best Regards,
    HanSeong Lee`;
    await transporter.sendMail({
        from: 'devComma<no-reply@devcomma.com>',
        to: email,
        subject: 'Thank you for submission!',
        text: emailContents,
    });

    const slackMessage = `*[New Contact]*\n:white_small_square:Name: ${name}\n:white_small_square:Email: ${email}\n:white_small_square:Message: ${message}`
    slackBotClient.postMessageToChannel('contact', slackMessage, {
        icon_url: `${process.env.NEXT_PUBLIC_URL}/apple-icon.png`,
    });

    return res.status(200).json({
        success: true,
    });
}

export default withSentry(connect()
    .post(validate({ body: schema }), post)
);
