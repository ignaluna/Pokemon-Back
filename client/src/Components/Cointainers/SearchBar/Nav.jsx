import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemons, setCurrentPage } from "../../../Redux/actions";
import { NavBarContainer, NavBarWrapper } from "./Navstyle";
import logo from "../../image/LandingPage/pokeballInicio.png"
import Search from "./SearchBar";
import style from "./Nav.module.css"



const Nav = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const ClickHandlerHome = async (event) => {
        event.preventDefault()
        await dispatch(getPokemons());
        navigate("/")
        dispatch(setCurrentPage(1))
    }

    return (
        <>
            {location.pathname !== "/landing" && (

                <NavBarContainer>
                    <NavBarWrapper>
                        <div className={style.containerHome}>
                        <img className={style.img} src={logo} onClick={(e) => ClickHandlerHome(e)} alt="Pokemoon"></img>
                        </div>
                        <div>
                            <Search></Search>
                        </div>
                        <button className={style.buttonCreate} onClick={() => { navigate("/create") }}>Create</button>
                    </NavBarWrapper>
                </NavBarContainer>

            )}
        </>
    )
}

export default Nav;