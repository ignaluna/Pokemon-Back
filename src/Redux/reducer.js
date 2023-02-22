import { GET_TYPES, GET_POKEMONS, GET_POKEMONS_BY_ID, GET_POKEMONS_BY_NAME, POST_POKEMONS, CURRENT_PAGE, ORDER_AZ, CLEAN_DETAIL, SET_LOADING } from "./actions";

// Importa las action types acá
const initialState = {
  pokemons: [],
  types: [],
  currentPage: 1,
  currentPokemon: {},
  createdPokemons: [],
  loading: true,
};



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case GET_POKEMONS_BY_ID:
      return { ...state, currentPokemon: action.payload };
    case POST_POKEMONS:
      return { ...state, pokemons: [...state.pokemons, action.payload], 
        createdPokemons:[...state.createdPokemons, action.payload] }
    case GET_POKEMONS_BY_NAME:
      return { ...state, pokemons: action.payload }
    case CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case ORDER_AZ: 
    return {...state, pokemons: action.payload}
    case CLEAN_DETAIL: 
    return {...state, currentPokemon: {}}
    case SET_LOADING: 
    return {...state, loading: !state.loading}
    

    default: return { ...state }

  }
}



export default rootReducer;
