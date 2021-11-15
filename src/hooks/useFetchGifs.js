import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Ejecuta getGifs cuando el componente es renderizado por primera vez nada más
    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    
                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 750);
            });

    }, [category]);

    return state;
}