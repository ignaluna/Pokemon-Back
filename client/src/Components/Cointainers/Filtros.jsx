import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { filterAZ, setCurrentPage } from "../../Redux/actions"
import style from "./Forms/create.module.css"


const Filtros = (props) => {
    const { types, pokemons } = useSelector(state => state)
    const dispatch = useDispatch();
    const [orderByChart, setOrderByChart] = useState(false);
    const navigate = useNavigate();
    const [s, setS] = useState(false);
    const OrderAz = () => {
        setS(!s);
        document.getElementById("toggle").classList.add("active")
        setOrderByChart(!orderByChart);
        var aZ = pokemons.map((el) => el.name).sort();
        if (!orderByChart) aZ = aZ.reverse();
        dispatch(filterAZ(aZ))
    }
    const handlerChange = (e) => {
        dispatch(setCurrentPage(1));
        navigate("/")
        navigate(`/${e.target.value}`
        )
    }
    return (

        <div className={style.filtros}>
            <div className={style.contAZ}>
            <label  htmlFor="A-Z">A-Z</label>
            <div  id="A-Z" className={style.toggle} onClick={OrderAz}>
                <div id="toggle" className={s ? `${style.switch} ${style.active}` : `${style.switch} `} onClick={OrderAz}></div>
            </div>
            </div>
            {
                <select className={style.select} onChange={handlerChange}>
                    {types.map(ele => {
                        return (
                            <option value={ele.name}
                                key={ele.id}>{ele.name}</option>
                        )
                    })}
                </select>
            }
        </div>
    )
}

export default Filtros;
