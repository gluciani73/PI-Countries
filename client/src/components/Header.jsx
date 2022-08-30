import React from "react";
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
                <select onChange={event => handleOrderPop(event)} className={s.select} defaultValue={'default'}>
                    <option value={'default'} disabled>Sort by population</option>
                    <option value="ASC">from smallest to largest</option>
                    <option value="DESC">from largest to smallest</option>
                </select>

                {/* ORDEN ALFABETICO POR NOMBRE  */}
                <select onChange={event => handleOrderName(event)} className={s.select} defaultValue={'default'}>
                    <option value={'default'} disabled>Sort by Name</option>
                    <option value="A-Z">Ascending alphabet</option>
                    <option value="Z-A">Descending aphabet</option>
                </select>
                <div>
                    {/* FILTRO POR CONTINENTE */}
                    <span>Select Continent: </span>
                    <select onChange={event => handleFilterContinent(event)} className={s.select}>
                        <option value="All">All countries</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div>
                    <span>Select Activity: </span>
                    {/* FILTRO POR ACTIVIDAD TURISTICA */}
                    <select onChange={event => handleFilterActivity(event)} className={s.select}>
                        <option value="All">All activities</option>
                        {activities && activities.map(activity => (
                            <option value={activity.name}>{activity.name}</option>
                        ))}
                    </select>
                </div>


            </div>
            <Search />
            <Link to="/activity">
                <button>Create tourist activity</button>
            </Link>

        </div>
    );
};