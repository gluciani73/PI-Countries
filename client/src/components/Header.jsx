import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import s from './Header.module.css';
import Search from './Search'
import { orderName, filterByContinent, filterByActivity, getAllActivities } from "../redux/actions";

export default function Header() {

    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.allActivities)

    const [order, setOrder] = useState('');

    // Estados locales para los filtros
    // const [filter, setFilter] = useState({
    //     search: '',
    //     continent: [],
    //     activity: '',
    //     sort: '',
    // })

    const changeOrder = (event) => {
        event.preventDefault()
        setOrder(event.target.value)
    }

    function handleSort(event) {
        event.preventDefault();
        dispatch(orderName(event.target.value));
        // setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`)
    }

    function handleFilterContinent(event) {
        // Se toma como payload el value de la option que elija el usuario
        event.preventDefault();
        dispatch(filterByContinent(event.target.value));
        // setCurrentPage(1);
    }

    function handleFilterActivity(event) {
        // Se toma como payload el value de la option que elija el usuario
        dispatch(filterByActivity(event.target.value))
        console.log(event.target.value)
    }


    return (
        <div className={s.headerDiv}>
            <div className={s.selectGap}>
                <select onChange={event => changeOrder(event)} className={s.select}>
                    {/** Deben ser filtrados ascendente y descendente por orden alfabetico y por cantidad de poblacion
                 */}
                    <option>Ordenar por poblacion</option>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>
                <select onChange={event => handleSort(event)} className={s.select}>
                    {/** Deben ser filtrados ascendente y descendente por orden alfabetico y por cantidad de poblacion
                 */}
                    <option>Ordenar por nombre</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select onChange={event => handleFilterContinent(event)} className={s.select}>
                    {/* filtrar por continente y por tipo de actividad turística */}
                    <option value="All">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">America del Norte</option>
                    <option value="South America">America del Sur</option>
                    <option value="Antarctica">Antartica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select onChange={event => handleFilterActivity(event)} className={s.select}>
                    <option value="All">Todas</option>
                    {allActivities && allActivities.map(activity => (
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