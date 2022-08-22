import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css';

export default function Header() {

    return (
        <div>
            <Link to="/activity">
                <button>Crear actividad Turística</button>
            </Link>
        </div>
    );
};