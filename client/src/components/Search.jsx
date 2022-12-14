import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { getCountryByName, setCurrentPage, resetCountries } from '../redux/actions'
import s from './Search.module.css';

export default function Search() {

    const dispatch = useDispatch();
    // const selectedCountries = useSelector(state => state.selectedCountries)

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        dispatch(getCountryByName(e.target.value)); // cambia state.selectedCountries
        dispatch(setCurrentPage(1));
    };

    function handleReset() {
        dispatch(resetCountries());
    }

    return (
        <div className={s.searchDiv} >
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input
                    className={s.SearchInput}
                    type='search'
                    name='country'
                    placeholder="write country to search"
                    value={search}
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <Link to="/home">
                <button onClick={() => handleReset()}>Clear Filters</button>
            </Link>
        </div>

    );
}
