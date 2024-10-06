export default function notesId({ params }: { params: { notesId: string } }){
    return (
        <div>
            <h1>fetch data for { params.notesId }</h1>
        </div>
    )
}