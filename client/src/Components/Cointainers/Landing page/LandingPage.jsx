import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css"
const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.contenedor}>
            <button className={styles.botonInicio} onClick={() => { navigate("/") }}>
                <span className={styles.textboton}>Pokemon Go!</span>
                </button>

        </div>
    )
}

export default LandingPage;