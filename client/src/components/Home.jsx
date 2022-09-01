import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, getAllCountries } from "../redux/actions";
import Cards from "./Cards";
import Pages from "./Pages";
import Header from "./Header";
import s from './Home.module.css';

export default function Home() {

    const dispatch = useDispatch();

    const selectedCountries = useSelector(state => state.selectedCountries);
    const currPage = useSelector(state => state.currentPage);

    useEffect(() => {
        if (!selectedCountries.length) dispatch(getAllCountries());
        dispatch(getAllActivities());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // calcúlo datos para paginar:
    const cardsxPage = 10;
    // en la pag 1 dejo 9 mas adelante
    const idxLastCard = currPage === 1 ? 8 : currPage * cardsxPage - 2;
    // para pag 2 sería pag. 2 x 10 cards - 2 = 18 el ultimo idx
    const idxFirstCard = currPage === 1 ? 0 : idxLastCard - cardsxPage + 1;
    // para pag. 2 sería 18 - 10 = 8
    const totalCards = selectedCountries.length
    const currentCountries = selectedCountries.slice(idxFirstCard, idxLastCard + 1);
    // pag 1 de 0 a 8, de pag 2 en adelante de 9 a 18

    return (<div className={s.home}>
        <div >
            <h3>Countries</h3>
            <Header />
        </div>
        <div className={s.pages}>
            <p></p>
            <Pages
                totalCards={totalCards}
                currPage={currPage}
                cardsxPage={cardsxPage}
            />
        </div>
        <div className={s.homeCards} >
            <Cards
                countries={currentCountries}
            />
        </div>
    </div>
    );
};