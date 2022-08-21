import React, { useState } from "react";
import s from './Search.module.css';

export default function Search({ setFilter, country }) {
    // const [country, setCountry] = useState('');

    function onSearch(e) {
        setFilter(e.target.name, e.target.value);
    }

    return (
        <div className={s.searchDiv} >
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(country);
            }}>
                <input
                    className={s.SearchInput} type="text"
                    placeholder="write country to search"
                    value={country}
                    // onChange={e => setCountry(e.target.value)
                    // }
                    onChange={onSearch}
                />
                <input type="submit" value="Search" />
            </form>
        </div>

    );
}
