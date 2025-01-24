'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import axios from 'axios';
import Configs from '@/lib/config';

const cache = new Map();

const MovieDetail: React.FC = () => {
    const { id } = useParams();
    const [movie, setMovie] = React.useState(null);
    const api_key = Configs.tmdb;

    React.useEffect(() => {
        const fetchData = async () => {
            if (cache.has(id)) {
                setMovie(cache.get(id));
            } else {
                try {
                    const { data } = await axios.get(
                        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${api_key}`
                    );
                    cache.set(id, data);
                    console.log(data.results)
                    setMovie(data);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchData();
    }, [id, api_key]);

    return (
        <section className="section-layout px-8 md:px-24 py-4">
            MovieDetail: {movie ? 'i' : 'Loading...'}
        </section>
    );
};

export default MovieDetail;
