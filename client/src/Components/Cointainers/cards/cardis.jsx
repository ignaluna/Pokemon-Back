import React from "react"
import { useNavigate } from "react-router-dom"
import style from "./cards.module.css"

const CardRecipe = (props) => {

    const navigate = useNavigate();

    const handlerDetail = () => {
        navigate(`/detail/${props.id}`)
    }
    return (

        <div className={style.plato}>
            <h1>{props.name}</h1>
            <img className={style.imgControlada}
                src={props.img} alt="icon" />
            <div className={style.medio}>
                <button className={style.moreInfo} type="button" onClick={handlerDetail}> {props.name} I choose you!</button>
                <div className={style.textmedio}>
                    <p>Type: {props.types.map(ele => `${ele} `)} </p>
                </div>
            </div>
        </div>
    )
}

export default CardRecipe;
