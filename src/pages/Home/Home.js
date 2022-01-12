import { useContext, useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import { Context } from "../../store/peliContext";

const Home = () => {
    const { getInfo, info } = useContext(Context)

    useEffect(() => {
        getInfo('https://api.themoviedb.org/3/movie/popular?api_key=bfa58da6c27436b4a5915f54d287c3a9&language=es-ES')
    }, [])

    return ( 
        <>
            <Slider />
            {info.length > 0 ?
                <p>Hay pelis</p>
            :
                <p>No hay pelis</p>
            }
        </>
     );
}
 
export default Home;