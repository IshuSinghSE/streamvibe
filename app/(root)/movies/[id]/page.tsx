'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const MovieDetail = () => {
    const { id } = useParams();

    return (
        <section className="section-layout px-8 md:px-24 py-4">
            MovieDetail: {id}
        </section>
    );
};

export default MovieDetail;
