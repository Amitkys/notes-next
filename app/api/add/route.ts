import { NextRequest } from "next/server";
import client from "@/lib/Singleton_prisma";

export async function POST(req: NextRequest){
    const data = await req.json();
    // console.log(data);
    await client.note.create({
        data: {
            title: data.title,
            content: data.content
        }
    })
    return Response.json({message: 'data is inseted'})
}