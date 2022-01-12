import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

export const Context = createContext(null)

const PeliProvider = ({children}) => {
    const [info, setInfo] = useState([])

    const getInfo = async (url) => {
        const response = await axios.get(`${url}`)
        setInfo(response.data.results)
    }

    // https://www.lamejorcancha.com/api/futbol
    // https://www.lamejorcancha.com/api/volley
    // https://www.lamejorcancha.com/api/handball


    return ( 
        <Context.Provider value={{getInfo, info}}>
            {children}
        </Context.Provider>
     );
}
 
export default PeliProvider;