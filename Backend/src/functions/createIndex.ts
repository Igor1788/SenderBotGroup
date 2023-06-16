import { client, q } from '../services/connectdb';

export async function createReverseIndex() {
    await client.query(
        q.CreateIndex({
            name: "lastID",
            source: q.Collection("ofertas"),
            terms: [],
            values: [
                { field: ["data", "id"], reverse: true }
            ]
        })
    );
}
