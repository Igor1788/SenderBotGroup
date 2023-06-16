import faunadb from 'faunadb';
import dotenv from 'dotenv';

dotenv.config();

const secret_key = process.env.FAUNADB_SECRET;

if (!secret_key) {
    throw new Error("FAUNADB_SECRET is not defined in .env file");
}

export const client = new faunadb.Client({ secret: secret_key });
export const q = faunadb.query;
