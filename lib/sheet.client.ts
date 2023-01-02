import SheetDatabase from 'sheets-database';

const sheetId: string = process.env.GOOGLE_SHEET_ID || '';
const client_email: string = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
const private_key: string = process.env.GOOGLE_PRIVATE_KEY || '';

export const createClient = async () => {
    const db = new SheetDatabase(sheetId);
    await db.useServiceAccount({
        client_email,
        private_key,
    });

    await db.sync();
    return db;
};
