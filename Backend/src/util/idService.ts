import { client, q } from '../services/connectdb';

export async function getNewId(): Promise<number> {
    const result: any = await client.query(
        q.Let(
            {
                lastIdDoc: q.Select(
                    [0],
                    q.Paginate(
                        q.Match(q.Index('lastID')),
                        { size: 1 }
                    ),
                    null
                )
            },
            q.If(
                q.IsNull(q.Var('lastIDDoc')),
                1,
                q.Add(q.Select([1], q.Get(q.Var('lastIDDoc'))), 1)
            )
        )
    );
    console.log(result);
    return result as number;
}


