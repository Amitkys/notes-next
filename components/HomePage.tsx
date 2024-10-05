import client from "@/lib/Singleton_prisma";

async function fetchData() {
    const all_notes = await client.note.findMany();
    return all_notes;
}

export async function HomePage() {
    const data = await fetchData();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* Table Head */}
                    <thead>
                        <tr className="font-bold text-sm">
                            <th>Created At</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        {data.map((note: any) => (
                            <tr key={note.id}>
                                <td>{new Date(note.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short'  })}</td> {/* Formatting createdAt */}
                                <td className="text-[15px] lg:text-[17px]">{note.title}</td>
                                <td>
                                    <button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
