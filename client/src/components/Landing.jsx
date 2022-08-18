import React from "react";
import s from './Landing.module.css';
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className={s.landing} >
            <Link to='/home'>
                <button className={s.button}  >Home</button>
            </Link>
        </div>
    )
}