import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css';
import Search from './Search'

export default function Header() {

    return (
        <div className={s.headerDiv}>
            <Search />
            <Link to="/activity">
                <button>Crear actividad Turística</button>
            </Link>

        </div>
    );
};