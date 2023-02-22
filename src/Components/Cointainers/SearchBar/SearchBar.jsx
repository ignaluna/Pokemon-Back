import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getPokemonsByName, setCurrentPage } from "../../../Redux/actions";
import style from "./Nav.module.css"
import buscar from "../../image/LandingPage/pokeballInicio.png"
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const changeHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setInput(value)
    }

    const HandlerSubmit = (event) => {
        event.preventDefault();
        const pok = input?.toLowerCase()
        input? dispatch(getPokemonsByName(pok)) : dispatch(getPokemons());
        dispatch(setCurrentPage(1))
        setInput("")
    }

    const handlerFocus = () => {
        if (window.location.pathname !== "/") navigate("/")
    }
    return (
        <div className={style.containerSearchBar}>
            <input className={style.input} type="text"
                placeholder="Search Pokemons"
                onFocus={handlerFocus}
                name="search" 
                onChange={(e) => changeHandler(e)} value={input}
                />
            <div className={style.containerHome} >
            <img className={style.img} src={buscar} onClick={(e) => HandlerSubmit(e)} alt="pokemon"></img>
            </div>
        </div>
    )
}

export default SearchBar;