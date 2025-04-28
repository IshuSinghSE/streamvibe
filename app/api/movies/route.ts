import { NextApiRequest } from 'next';
import { genres } from '@/db/schema/movies';
import { db } from '@/db/drizzle';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
    try {
        const parsedData = req.body;
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
        return NextResponse.json({genres: genresData});
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' });
        }
    }
}
