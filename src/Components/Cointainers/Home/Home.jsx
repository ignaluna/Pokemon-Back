import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards.jsx"
import Paginaldo from "../paginator.jsx";
import Filtros from "../Filtros.jsx";
import { useParams } from "react-router-dom";
import { getPokemons } from "../../../Redux/actions.js";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css"
import Loading from "../loading/Loading.jsx";
import pokeSad from "../../image/fondoNF.png"
import pokeball from "../../image/pokeball.gif"


const Home = (props) => {
    const { pokemons, currentPage } = useSelector(state => state)
    const navigate = useNavigate();
    const [postPerPage] = useState(12);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = pokemons.slice(firstPostIndex, lastPostIndex);
    const { filter } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    useEffect(() => (dispatch(getPokemons(filter))), [filter, dispatch]) // aca van los filters.

    const loadingCallback = useCallback(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        loadingCallback()
    }, [loadingCallback, filter, currentPage]);

    return (
        <>
            <div>
                {loading &&
                    <Loading />
                }
            </div>
            <>
                {!loading && <div className={style.Container}>
                    <div>
                        {!pokemons[0] &&
                            <div className={style.error}>
                                <img src={pokeSad} className={style.img} alt="Pokemon" />
                                <div className={style.ContainerText}>
                                    <img className={style.pokeball} src={pokeball} alt="pokeball" onClick={() => { navigate("/create") }} />
                                    <p>Pokemon not found</p>
                                </div>
                            </div>
                        }
                    </div>

                    <div>
                        {pokemons[0] &&
                            <>
                                <Filtros />
                                < Cards pokemons={currentPost} />
                                <Paginaldo totalPost={pokemons.length} postPerPage={postPerPage}
                                    currentPage={currentPage}></Paginaldo>
                            </>
                        }

                    </div>
                </div>
                }
            </>
        </>
    )
}

export default Home;