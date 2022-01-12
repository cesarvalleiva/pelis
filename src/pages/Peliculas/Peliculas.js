import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/peliContext";

const Peliculas = () => {
    const {category} = useParams();
    const { getInfo, info } = useContext(Context)

    useEffect(() => {
        getInfo(`https://api.themoviedb.org/3/movie/${category}?api_key=bfa58da6c27436b4a5915f54d287c3a9&language=es-ES`)
    }, [])

    return ( 
        <>
            <h3>Películas de la categoría {category}</h3>
            {info.length > 0 ?
                <p>Hay pelis</p>
            :
                <p>No hay pelis</p>
            }
        </>
     );
}
 
export default Peliculas;