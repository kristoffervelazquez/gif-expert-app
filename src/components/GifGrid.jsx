// import { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category.toUpperCase()}</h3>

            {loading && <p className="animate__animated animate__flash">'Cargando...'</p>}

            <br />

            <ul className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </ul>

        </>


    )
}

export default GifGrid