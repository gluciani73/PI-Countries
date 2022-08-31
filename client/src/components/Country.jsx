import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../redux/actions";
import s from './Country.module.css';
import { Link } from "react-router-dom";

export default function Country() {

    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log('id de params: ', id)

    useEffect(() => {
        dispatch(getCountryDetail(id));
    }, [dispatch, id]);
    // console.log()
    const country = useSelector((state) => state.countryDetail)
    // console.log('Country: ', country);
    return (
        <div className={s.country} >
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
                    <hr />
                    <div className={s.activities}><strong>Turist Activities: </strong>{
                        country.activities ? country.activities.map(
                            (a) => (<div>
                                <p><strong>{a.name}</strong> Difficulty: {a.difficulty}, Duration: {a.duration} hs., Season:  {a.season}</p>
                            </div>)
                        ) : <div> No activities to show</div>
                    }</div>
                </div>
            </div>
            <Link to='/home'>
                <button className={s.button} >Home</button>
            </Link>
        </div>
    )
};