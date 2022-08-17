import React from "react";
import s from './Landing.module.css';

export default function Landing() {
    return (
        <div className={s.landing} >
            {/* <img src="../images/EarthMap.jpg" alt="image no t found" id="backGroungImg" className="landingImg" /> */}

            <button className={s.button}  >Home</button>

        </div>
    )
}