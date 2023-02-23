import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonsById, cleanDetail } from "../../../Redux/actions";
import styles from "./detail.module.css"
import char from "../../image/detail/char.gif"
import snor from "../../image/detail/snor.gif"
import Loading from "../loading/Loading";
import twitter from "../../image/detail/twitter.png"
import height from "../../image/stats/height.png"
import attack from "../../image/stats/attack.png"
import hp from "../../image/stats/hp.png"
import shield from "../../image/stats/shield.png"
import speed from "../../image/stats/speed.png"
import weight from "../../image/stats/weight.png"



const Detail = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getPokemonsById(id));
        return dispatch(cleanDetail())
    }, [dispatch, id]);

    const currentPokemon = useSelector(state => state.currentPokemon);

    const loadingCallback = useCallback(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        loadingCallback()
    }, [loadingCallback]);

    return (
        <>
            <div>
                {loading &&
                    <Loading />
                }
            </div>
            <>{!loading && <div className={styles.general}>
                <img className={styles.png} src={char} alt="pokemon"/>
                <div className={styles.contData}>
                    <h2 className={styles.title}>{currentPokemon.name}</h2>
                    <div className={styles.contImgText}>
                        <img className={styles.img} src={currentPokemon.img} alt="pokemoon" />
                        <div className={styles.stats}>
                            <p className={styles.statsNum}><img className={styles.statsImg} alt="hp"  src={hp}/>: {currentPokemon.hp}</p>
                            <p className={styles.statsNum}><img className={styles.statsImg} alt="attack" src={attack}/>: {currentPokemon.attack}</p>
                            <p className={styles.statsNum}><img className={styles.statsImg} alt="shield" src={shield}/>: {currentPokemon.hp}</p>
                            <p className={styles.statsNum}><img className={styles.statsImg}  alt="speed"src={speed}/>: {currentPokemon.speed}</p>
                            <p className={styles.statsNum}><img className={styles.statsImg} alt="height" src={height}/>: {currentPokemon.height}</p>
                            <p className={styles.statsNum}><img className={styles.statsImg} alt="weight" src={weight}/>: {currentPokemon.weight}</p>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <a href={`https://twitter.com/intent/tweet?text=This is my pokemon "${currentPokemon.name}" create yours.&url=https://pokemon-back.vercel.app/&via=ignaluna98&hashtags=#pokemon`}
                            target="_blank" rel="noreferrer"><img className={styles.twitter} alt="twitter" src={twitter} /></a>
                    </div>
                </div>
                <img className={styles.png} src={snor} alt="snor"></img>
            </div>
            }
            </>
        </>
    )
}

export default Detail;