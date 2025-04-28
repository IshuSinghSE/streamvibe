import { NextResponse } from 'next/server';
import { genres } from '@/db/schema/movies';
import { db } from '@/db/drizzle';

export async function POST(req: Request) {
    try {
        const parsedData = await req.json(); // Parse JSON body from the Request object
        if (Array.isArray(parsedData)) {
            await db.insert(genres).values(parsedData);
        } else {
            await db.insert(genres).values([parsedData]);
        }

        return NextResponse.json({ message: 'Genres added successfully' });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' });
        }
    }
}

export async function GET() {
    try {
        const genresData = await db.select().from(genres);
        return NextResponse.json({ genres: genresData });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' });
        }
    }
}
