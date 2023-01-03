// @ts-ignore
import SlackBot from 'slackbots';

const token = process.env.SLACK_TOKEN;
const name = process.env.SLACK_BOT_NAME;

export const slackBotClient = new SlackBot({
    token,
    name
});
