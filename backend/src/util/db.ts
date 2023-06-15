import faunadb from 'faunadb';
import dotenv from 'dotenv';

dotenv.config();

const secretKey : string | undefined = process.env.FAUNADB_SECRET

const faunadbClient = new faunadb.Client({secretKey});
