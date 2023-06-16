import { client, q } from '../services/connectdb';
import { Db } from '../types/fauna';

export const registerInDb = async (data: Db) => {
  return await client.query(
    q.Create(
      q.Collection('ofertas'),
      { data }
    )
  );
};