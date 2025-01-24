'use client';
import ContentCardCarousel from '@/components/ContentCardCarousel';
import HeroCarousel, { moviesProps } from '@/components/homepage/HeroCarousel';
import Configs from '@/lib/config';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
const cache = new Map();

const Movies = () => {
    const [movies, setMovies] = useState<moviesProps[] | undefined>(undefined);
    const [popular, setPopular] = useState<moviesProps[] | undefined>(undefined);
    const [topRated, setTopRated] = useState<moviesProps[] | undefined>(undefined);
    const [upcoming, setUpcoming] = useState<moviesProps[] | undefined>(undefined);
    const [genres, setGenres] = useState<{ id: number; name: string }[] | undefined>(undefined);
    const { api_key, api_url } = Configs.tmdb;

    useEffect(() => {
        const fetchNowPlayingData = async () => {
            if (cache.has('now_playing')) {
                setMovies(cache.get('now_playing'));
            } else {
                try {
                    const response = await axios.get(
                        `${api_url}movie/now_playing?language=en-US&page=1&api_key=${api_key}`
                    );
                    console.log(response.status);
                    const { data } = response;
                    cache.set('now_playing', data.results);
                    console.log(data.results);
                    setMovies(data.results);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchNowPlayingData();
    }, [api_key, api_url]);

    useEffect(() => {
        const fetchPopularData = async () => {
            if (cache.has('popular')) {
                setPopular(cache.get('popular'));
            } else {
                try {
                    const response = await axios.get(
                        `${api_url}movie/popular?language=en-US&page=1&api_key=${api_key}`
                    );
                    console.log(response.status);
                    const { data } = response;
                    cache.set('popular', data.results);
                    console.log(data.results);
                    setPopular(data.results);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchPopularData();
    }, [api_key, api_url]);

    useEffect(() => {
        const fetchTopRatedData = async () => {
            if (cache.has('top_rated')) {
                setTopRated(cache.get('top_rated'));
            } else {
                try {
                    const response = await axios.get(
                        `${api_url}movie/top_rated?language=en-US&page=1&api_key=${api_key}`
                    );
                    console.log(response.status);
                    const { data } = response;
                    cache.set('top_rated', data.results);
                    console.log(data.results);
                    setTopRated(data.results);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchTopRatedData();
    }, [api_key, api_url]);

    useEffect(() => {
        const fetchUpcomingData = async () => {
            if (cache.has('upcoming')) {
                setUpcoming(cache.get('upcoming'));
            } else {
                try {
                    const response = await axios.get(
                        `${api_url}movie/upcoming?language=en-US&page=1&api_key=${api_key}`
                    );
                    console.log(response.status);
                    const { data } = response;
                    cache.set('upcoming', data.results);
                    console.log(data.results);
                    setUpcoming(data.results);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchUpcomingData();
    }, [api_key, api_url]);

    useEffect(() => {
        const fetchGenresData = async () => {
            if (cache.has('genres')) {
                setGenres(cache.get('genres'));
            } else {
                try {
                    const response = await axios.get(
                        `api/movies`
                    );
                    console.log(response.status);
                    const { data } = response;
                    cache.set('genres', data.genres);
                    console.log(data.genres);
                    setGenres(data.genres);
                } catch (err) {
                    console.error(err);
                }
            }
        };
        fetchGenresData();
    }, [api_key, api_url]);


    return (
        <section className="section-layout">
            <Suspense fallback={<div>Loading...</div>}>
                <HeroCarousel movies={movies ? movies.slice(0, 5) : []} />
            </Suspense>

            <div className="px-8 md:px-24 flex flex-col gap-12 items-start justify-center bg-gradient-to-t from-transparent to-black opacity-90">
                <div className="w-full space-y-4">
                    <h2 className="text-xl font-semibold tracking-wide">
                        Trending Now
                    </h2>
                    <ContentCardCarousel
                        items={
                            popular?.map((movie) => ({
                                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                                title: movie.release_date,
                                stats: `${Math.round(movie.popularity)}`,
                                type: 'movie',
                                id: movie.id
                            })) ?? []
                        }
                        variant="trending"
                    />
                </div>
                <div className="w-full space-y-4">
                    <h2 className="text-xl font-semibold tracking-wide">
                       Upcoming
                    </h2>
                    <ContentCardCarousel
                        items={
                            upcoming?.map((movie) => ({
                                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                                title: movie.release_date,
                                type: 'movie',
                                id: movie.id
                            })) ?? []
                        }
                        variant="released"
                    />
                </div>
                <div className="w-full space-y-4">
                    <h2 className="text-xl font-semibold tracking-wide">
                        Must watch
                    </h2>
                    <ContentCardCarousel
                        items={
                            topRated?.map((movie) => ({
                                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                                title: movie.release_date,
                                stats: movie.vote_average,
                                type: 'movie',
                                id: movie.id
                            })) ?? []
                        }
                        variant="mustwatch"
                    />
                </div>
                <div className="w-full space-y-4">
                    <h2 className="text-xl font-semibold tracking-wide">
                        Genres
                    </h2>
                    <ContentCardCarousel
                        items={
                            genres?.map((genre) => ({
                                image: '/assets/images/genre/adventure.png',
                                title: genre.name,
                                stats: '',
                                type: 'genre',
                                id: genre.id
                            })) ?? []
                        }
                        variant="genre"
                        stats={<ArrowRightIcon width={24} height={24} />}
                    />
                 
                </div>
            </div>
        </section>
    );
};

export default Movies;
