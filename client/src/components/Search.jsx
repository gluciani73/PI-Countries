import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../redux/actions'
import s from './Search.module.css';

export default function Search({ setFilter, country }) {
    // function onSearch(e) {
    //     setFilter(e.target.name, e.target.value); }

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        dispatch(getCountryByName(e.target.value));
    };

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
                    // onChange={e => setCountry(e.target.value)
                    // }
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </div>

    );
}
