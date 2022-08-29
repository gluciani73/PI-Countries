import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import s from './Header.module.css';
import Search from './Search'
import { filterByContinent, filterByActivity, orderByName, orderByPopulation, setCurrentPage } from "../redux/actions";

export default function Header() {

    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.allActivities)
    const activities = [...new Set(allActivities)];

    function handleOrderPop(event) {
        event.preventDefault()
        dispatch(orderByPopulation(event.target.value));
        dispatch(setCurrentPage(1));
    }

    function handleOrderName(event) {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        dispatch(setCurrentPage(1));
    }

    function handleFilterContinent(event) {
        event.preventDefault();
        dispatch(filterByContinent(event.target.value));
        dispatch(setCurrentPage(1));
    }

    function handleFilterActivity(event) {
        // console.log(activities);
        dispatch(filterByActivity(event.target.value))
        dispatch(setCurrentPage(1));
        console.log(event.target.value)
    }

    return (
        <div className={s.headerDiv}>
            <div className={s.selectGap}>

                {/* ORDEN POR POBLACION */}
                <select onChange={event => handleOrderPop(event)} className={s.select}>
                    <option>Ordenar por poblacion</option>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>

                {/* ORDEN ALFABETICO POR NOMBRE  */}
                <select onChange={event => handleOrderName(event)} className={s.select}>
                    <option>Ordenar por nombre</option>
                    <option value="A-Z">Ascendente</option>
                    <option value="Z-A">Descendente</option>
                </select>

                {/* FILTRO POR CONTINENTE */}
                <select onChange={event => handleFilterContinent(event)} className={s.select}>
                    <option value="All">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">America del Norte</option>
                    <option value="South America">America del Sur</option>
                    <option value="Antarctica">Antartica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>

                {/* FILTRO POR ACTIVIDAD TURISTICA */}
                <select onChange={event => handleFilterActivity(event)} className={s.select}>
                    <option value="All">Todas</option>
                    {activities && activities.map(activity => (
                        <option value={activity.name}>{activity.name}</option>
                    ))}
                </select>

            </div>
            <Search />
            <Link to="/activity">
                <button>Crear actividad Turística</button>
            </Link>

        </div>
    );
};