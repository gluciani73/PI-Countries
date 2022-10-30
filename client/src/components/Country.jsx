import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail, resetCountryDetail } from "../redux/actions";
import s from './Country.module.css';
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function Country() {
    const showLoading = useSelector(state => state.showLoading);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id));

        return () => {
            dispatch(resetCountryDetail())
        };

    }, [dispatch, id]);

    const country = useSelector((state) => state.countryDetail)

    return (
        <div className={s.country} >
            <div>
                {showLoading && <Loader />}
            </div>
            <div className={s.detail}>
                <h2>{country.name}</h2>
                <img className={s.flag}
                    src={country.flag}
                    alt="country flag not found" />
                <div className={s.info}>
                    <div>Country code: {country.id}</div>
                    <div>Capital: {country.capital}</div>
                    <div>Subregion: {country.subregion}</div>
                    <div>Continent: {country.continent}</div>
                    <div>Area: {country.area} km2</div>
                    <div>Population: {country.population} inhabitants</div>
                    <div>Languages: {country.languages}</div>
                    <div>Currency: code {country.currency}, {country.currency_name}, symbol: {country.currency_symbol}</div>
                    <hr />
                    <div className={s.activities}><strong>Turist Activities: </strong>{
                        country.activities && country.activities.length ?
                            country.activities.map(
                                (a, idx) => (<div key={idx}>
                                    <p><strong>{a.name}</strong> Difficulty: {a.difficulty}, Duration: {a.duration} hs., Season:  {a.season}</p>
                                </div>))
                            : <div> No activities to show</div>
                    }</div>
                </div>
            </div>
            <Link to='/home'>
                <button className={s.button} >Back</button>
            </Link>
        </div>
    )
};