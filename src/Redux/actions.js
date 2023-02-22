import axios from "axios";
import FilterType from "../Helpers/filtertype";

// Aca deben declarar las variables donde tengan el action types.
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const GET_POKEMONS_BY_ID = "GET_POKEMONS_BY_ID";
export const POST_POKEMONS = "POST_POKEMONS";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const ORDER_AZ = "ORDER_AZ";
export const CLEAN_DETAIL = "CLEAN_DEATIL";
export const SET_LOADING = "SET_LOADING";




export const postPokemons = (form) => {
    return async (dispatch) => {
        const { data } = await axios.post(`/pokemon`, form);
        return dispatch({
            type: POST_POKEMONS,
            payload: data,
        });
    };
};
export const getPokemons = (filter) => {
    return async (dispatch) => {
        if (filter) {
            const { data } = await axios.get(`/pokemon`);
            const filterPok = FilterType(filter, data)
            return dispatch({ type: GET_POKEMONS, payload: filterPok })
        } else {
            const { data } = await axios.get(`/pokemon`)
            return dispatch({ type: GET_POKEMONS, payload: data })
        }
    }
};

export const filterAZ = (aZ, pokemons) => {
    return async (dispatch) => {
        const { data } = await axios.get(`/pokemon`)
        const sortedPokemons = [];
        for (let i = 0; i < aZ.length; i++) {
            data.forEach(
                (pokemon) => pokemon.name === aZ[i] && sortedPokemons.unshift(pokemon)
            );
        }
        return dispatch({ type: GET_POKEMONS, payload: sortedPokemons })
    }
}

// export const getTypes = () => {
//     return async (dispatch) => {
//         const { data } = await axios.get(`/type`)

//         return dispatch({ type: GET_TYPES, payload: data })
//     }
// };

export const getTypes = () => {
        return (dispatch) => {
            axios.get(`/type`)
            .then(response => response.data)
            .then(response => dispatch({ type: GET_TYPES, payload: response}))
        }
    };

export const getPokemonsByName = (url) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/pokemon?name=${url}`);

            return dispatch({ type: GET_POKEMONS_BY_NAME, payload: [data] })
        } catch (error) {
            return dispatch({ type: GET_POKEMONS_BY_NAME, payload: [] })
        }
    }
}


export const getPokemonsById = (id) => {

    return async (dispatch) => {
        const { data } = await axios.get(`/pokemon/${id}`);
        return dispatch({ type: GET_POKEMONS_BY_ID, payload: data })
    }
};

export const setCurrentPage = (page) => {
    return ({ type: CURRENT_PAGE, payload: page })

};

export const cleanDetail = (page) => {
    return ({ type: CLEAN_DETAIL, })

};

export const setLoading = () => {
    return ({ type: SET_LOADING, })

};