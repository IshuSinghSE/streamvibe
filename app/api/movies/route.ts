import { NextApiRequest, NextApiResponse } from 'next';
import { genres } from '@/db/schema/movies';
import { db } from '@/db/drizzle';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const parsedData = await req.json();
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

export async function GET(req: NextApiRequest, res: NextApiResponse) {
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
