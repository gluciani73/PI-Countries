import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from "../redux/actions";
import Cards from "./Cards";
import Pages from "./Pages";

import s from './Home.module.css';
// import Search from "./Search";
// import Cards from "./Cards";

export default function Home() {

    const dispatch = useDispatch();
    // traigo los paises del estado Global
    const allCountries = useSelector(state => state.allCountries);
    const currPage = useSelector(state => state.pageCurr);

    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(currPage) //pagina actual (initialState = 1)
    const [cardsxPage, setCardsxPage] = useState(9);

    // Si se carga por primera vez o actualizan los componentes:
    useEffect(() => {
        dispatch(getAllCountries());
    }, []);

    // calcúlo datos para paginar:
    const idxLast = currPage * cardsxPage;  // para pag 1 sería pag. 1 x 9 cards = 9 el ultimo idx
    const idxFirst = idxLast - cardsxPage; // para pag. 1 sería 9 - 9 = 0
    const currentCountries = allCountries.slice(idxFirst, idxLast) // pag 1 de 0 a 9

    return (<div className={s.home}>
        <div>
            <h2>Header</h2>
        </div>
        <div>
            <h3> Pages</h3>
            <Pages
                cardsxPage={cardsxPage}
                currPage={currPage}
            />
        </div>
        <div className={s.homeCards} >
            <h3>Countries</h3>
            <Cards countries={currentCountries} />
        </div>

        {/* <Search onSearch={onSearch} /> */}
        {/* <Cards countries={countries} onClose={onClose} /> */}

    </div>
    );
}