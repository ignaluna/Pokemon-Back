import React from "react";
import pikachu from "../../video/loading.gif"
import style from "./loading.module.css"

const Loading = (props) => {
    return (
        <div className={style.container}>
        <img src={pikachu} className={style.pikachu} alt="pikachu"></img>
        </div>
    )
}

export default Loading;