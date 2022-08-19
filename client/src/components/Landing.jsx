import React from "react";
import s from './Landing.module.css';
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className={s.landing} >
            <div className={s.landingText}>

                <h1>Countries</h1>
            </div>
            <h2>Learn something else about our world</h2>
            <h3>Capitals, Activities, Population, Areas... </h3>
            <Link to='/home'>
                <button className={s.button} >Home</button>
            </Link>
        </div>
    )
}