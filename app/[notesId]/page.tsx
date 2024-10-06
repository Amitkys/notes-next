import client from "@/lib/Singleton_prisma";

async function fetchData(id: string) {
    const data = await client.note.findUnique({
        where: { id: id },
    });
    return data;
}

function formattedDate(updatedAt: Date) {
    const date = new Date(updatedAt);

    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' }); // Get short month name
    const day = date.getDate();

    // Use locale string to get 12-hour time format with AM/PM
    const time = date.toLocaleString('default', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true, // Enable 12-hour format
    });

    // Return the formatted string
    return `${year}, ${day} ${month}: ${time}`;
}


export default async function notesId({ params }: { params: { notesId: string } }) {
    const data = await fetchData(params.notesId);

    if (!data) {
        return (
            <div>
                <p>Note not found</p>
            </div>
        );
    }

    return (
        <div>
            <p>Last update: {formattedDate(data.updatedAt)}</p>
            <h1>Title: {data.title}</h1>
            <h1>Notes: {data.content}</h1>
        </div>
    );
}
