import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const inputDefault = {
    name: "",
    hp: "50",
    attack: "50",
    defense: 50,
    speed: "50",
    types: [],
    height: "50",
    weight: "50",
    img: "",
}

export const ToDetail = () => {
    const { createdPokemons } = useSelector(state => state);
    const navigate = useNavigate();
console.log(createdPokemons);
    navigate(`/detail/${createdPokemons[-1].id}`)
}




