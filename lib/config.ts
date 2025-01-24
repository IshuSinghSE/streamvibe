// Purpose: Configuration file for the application.

const Configs = {
    SITE_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    tmdb: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY || '',
        api_url: process.env.NEXT_PUBLIC_TMDB_API_URL || '',
        media_url: process.env.NEXT_PUBLIC_TMDB_MEDIA_URL || ''
    }
};

export default Configs;
