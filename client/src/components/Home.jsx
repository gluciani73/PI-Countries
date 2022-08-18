import React from "react";
import s from './Home.module.css';
import Search from "./Search";
import Cards from "./Cards";

export default function Home({ onSearch }) {
    return (<div className={s.home}>
        <Search onSearch={onSearch} />
        <Cards countries={countries} onClose={onClose} />

    </div>)
}