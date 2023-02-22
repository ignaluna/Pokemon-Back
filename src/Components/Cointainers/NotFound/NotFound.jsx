import React from "react";
import style from "./NotFound.modules.css"
import { useNavigate } from "react-router-dom";


export const NotFound = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={style.error}>
                <p className={style.text}>Pokemon not jidoascfjasp found</p>
                <p>You should create</p>
                <button onClick={() => { navigate("/create") }}>Create Pokemoon</button>
            </div>
        </div>
    )
}

export default NotFound;