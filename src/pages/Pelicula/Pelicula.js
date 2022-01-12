import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/peliContext";

const Pelicula = () => {
    const {id} = useParams();
    const { getInfo, info } = useContext(Context)

    useEffect(() => {
        getInfo(`https://api.themoviedb.org/3/movie/${id}?api_key=bfa58da6c27436b4a5915f54d287c3a9&language=es-ES`)
    }, [])

    return ( 
        <>
            <h3>Película: {id}</h3>
            {info !== "" ?
                <p>Hay pelis</p>
            :
                <p>No hay pelis</p>
            }
        </>
     );
}
 
export default Pelicula;