import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidationForm from "../../../Helpers/ValidationForm";
import { postPokemons } from "../../../Redux/actions";
import style from "./create.module.css"
import { inputDefault } from "../../../Helpers/formHelp";
import { useNavigate } from "react-router-dom";
import pikachu from "../../image/Nav Bar/pikachu.png"


const CreatePokemon = () => {
    const navigate = useNavigate()
    const { types } = useSelector(state => state);
    const dispatch = useDispatch();
    const [typesClicked, setTypeClicked] = useState({})

    const [input, setInput] = useState(inputDefault)

    const [errors, setErrors] = useState({
        name: "",
        img: "",
        stats: "",
    })

    const handleInputChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        if (property === "types") {
            setInput({
                ...input, types: [...input.types, value]
            })
        } else {
            const allInput = { ...input, [property]: value, };
            setInput(allInput)
            setErrors(ValidationForm(allInput))
        }
    }

    const typeInputButton = (e) => {
        const id = e.target.value
        if (input.types.find((el) => el === id)) {
            const filteredState = input.types.filter((el) => el !== id);
            setInput({ ...input, types: filteredState });
            clickType(id);
        } else setInput({ ...input, types: [...input.types, id] });
        clickType(id);
    };

    const clickType = (id) => {
        if (!typesClicked[id]) {
            setTypeClicked({ ...typesClicked, [id]: true })
        } else {
            setTypeClicked({ ...typesClicked, [id]: false });
        }
    };

    const SubmitHandler = async (event) => {
        event.preventDefault();
        const pokemon = await dispatch(postPokemons(input));
        setInput(inputDefault)
        navigate(`/detail/${pokemon.payload.id}`)
    }
    return (
        <form className={style.form} onSubmit={SubmitHandler}>
            <div className={style.divContainer}>
                <div>
                    <div>
                    <div>
                        <input
                            className={style.name}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={input.name}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text"
                            id="img" name="img"
                            placeholder="https://... a picture"
                            className={style.input}
                            value={input.img}
                            onChange={handleInputChange} />
                    </div>
                        <label htmlFor="hp"> Hp: {input.hp}</label>
                        <input
                            className={style.range}
                            type="range"
                            name="hp"
                            min="0" max="100"
                            onChange={handleInputChange}
                            value={input.hp} />
                    </div>

                    <div>
                        <label htmlFor="attack"> Attack: {input.attack}</label>
                        <input
                            className={style.range}
                            type="range"
                            name="attack"
                            min="0" max="100"
                            onChange={handleInputChange}
                            value={input.attack} />
                    </div>
                    <div>
                        <label htmlFor="speed"> Speed: {input.speed}</label>
                        <input
                            className={style.range}
                            type="range"
                            name="speed"
                            min="0" max="100"
                            onChange={handleInputChange}
                            value={input.speed} />
                    </div>
                    <div>
                        <label htmlFor="defense"> Defense: {input.defense}</label>
                        <input
                            className={style.range}
                            type="range"
                            name="defense"
                            min="0" max="100"
                            onChange={handleInputChange}
                            value={input.defense} />
                    </div>
                    <div>
                        <label htmlFor="height"> Height: {input.height}</label>
                        <input
                            className={style.range}
                            type="range"
                            name="height"
                            min="0" max="100"
                            onChange={handleInputChange}
                            value={input.height} />
                    </div>
                    <div>
                        <label htmlFor="weight"> Weight: {input.weight}</label>
                        <input
                            className={style.range}
                            type="range"
                            name="weight"
                            min="0" max="100"
                            onChange={handleInputChange}
                            value={input.weight} />
                    </div>
                    <div>
                        <div className={style.typesCont}>
                            {
                                types.map((ele, idx) => {
                                    while (idx < 20) {
                                        return (
                                            <button className={typesClicked[idx + 1] ? style.typesCli : style.dietsButton} type="button" onClick={(e) => {
                                                typeInputButton(e);
                                            }} name="types" value={ele.id} key={ele.id}>{ele.name}</button>
                                        )
                                    }
                                }
                                )
                            }
                        </div>
                    </div>

                </div>
                <div>
                    {
                        errors.name &&
                        <div className={style.contErrors}>
                            <img className={style.imgPeq} alt="pikachu" src={pikachu}></img>
                            <p>{errors.name}</p>
                        </div>
                    }
                    {
                        errors.img && <p>{errors.img}</p>
                    }
                    {
                        errors.stats && <p>{errors.stats}</p>
                    }
                </div>
                <div>
                    <button type="submit" className={style.submitButton} disabled={!input.name || errors.name || errors.img || errors.stats
                    }>Choose your Pokemoon</button>
                </div>
            </div>
            <div className={style.divRelleno}></div>
        </form>
    )
}

export default CreatePokemon;
