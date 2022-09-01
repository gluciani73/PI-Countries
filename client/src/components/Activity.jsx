import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity, getAllCountries } from '../redux/actions';
import { useHistory } from 'react-router';
import s from './Activity.module.css';
import { Link } from 'react-router-dom';

export default function Activity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector(state => state.allCountries)

    const [input, setInput] = useState(
        {
            name: '',
            difficulty: 0,
            duration: 0,
            season: '',
            countries: []
        });

    const [errors, setErrors] = useState({});
    const [change, setChange] = useState(false);

    useEffect(() => change && validate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [input])

    function validate() {
        let errors = {};
        if (!input.name) {
            errors.name = 'Name is required';
        } else if (!/^(?!.*[ ]{2})[a-zA-Z0-9._\s-#!~@%^()]+$/g.test(input.name)) {
            errors.name = 'Name is invalid: It must have only letters and/or numbers';
        }
        if (!input.difficulty) {
            errors.difficulty = 'Please select Difficulty';
        } else if (parseInt(input.difficulty) > 5 || parseInt(input.difficulty) < 1) {
            errors.name = 'Difficulty is invalid: it should be a number from 1 to 5 ';
        }
        if (!input.duration) {
            errors.duration = 'Please select Duration in hours';
        } else if (parseInt(input.duration) < 0 || parseInt(input.duration) > 24) {
            errors.duration = 'Duration is invalid: it should be a number from 1 to 24 ';
        }
        if (!input.season) {
            errors.season = 'Please select Season';
        } else if (!["Verano", "Otoño", "Invierno", "Primavera"].includes(input.season)) {
            errors.season = 'Season is invalid: it should be "Verano", "Otoño", "Invierno" or "Primavera" ';
        }
        if (!input.countries.length) {
            errors.countries = 'Please select at least one country';
        }
        setErrors(errors);
        return errors;
    }

    const handleInputChange = function (e) {
        if (e.target.checked) {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setChange(true);
    };

    const handleAddCountry = (e) => {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        });
        setErrors({});
    };

    const handleDeleteCountry = (e, c) => {
        e.preventDefault();
        setInput({
            ...input,
            countries: input.countries.filter((co) => co !== c)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addActivity(input))
            .then(() => dispatch(getAllCountries()))
            .then(() => history.push('/home'))  // https://v5.reactrouter.com/web/api/Hooks/usehistory
        setInput({
            name: '',
            difficulty: 0,
            duration: 0,
            season: '',
            countries: []
        });
        setChange(false);
    }

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch]);

    return (
        <div className={s.activityDiv}>
            <h2>Create Activity</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={s.formDiv}>
                    <label >Name: </label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        required
                        onChange={handleInputChange}
                        placeholder="Activity name"
                    />
                    {errors.name && <span> - {errors.name}</span>}
                </div>
                <div className={s.formDiv}>
                    <label>Difficulty: </label>
                    <label>
                        <input type="radio" value='1' name='difficulty' onChange={handleInputChange} /> 1
                    </label>
                    <label>
                        <input type="radio" value='2' name='difficulty' onChange={handleInputChange} /> 2
                    </label>
                    <label>
                        <input type="radio" value='3' name='difficulty' onChange={handleInputChange} /> 3
                    </label>
                    <label>
                        <input type="radio" value='4' name='difficulty' onChange={handleInputChange} /> 4
                    </label>
                    <label >
                        <input type="radio" value='5' name='difficulty' onChange={handleInputChange} /> 5
                    </label>
                    {errors.difficulty && <span> - {errors.difficulty}</span>}
                </div>
                <div className={s.formDiv}>
                    <label>Duration: </label>
                    <input
                        type='number'
                        min='1'
                        max='24'
                        value={input.duration}
                        name="duration"
                        onChange={handleInputChange}
                        placeholder="Duration" /> in hours.
                    {errors.duration && <span> - {errors.duration}</span>}
                </div>
                <div className={s.formDiv}>
                    <label>Season: </label>
                    <label>
                        <input type="radio" value='Verano' name='season' onChange={handleInputChange} />
                        Verano</label>
                    <label>
                        <input type="radio" value='Otoño' name='season' onChange={handleInputChange} />
                        Otoño</label>
                    <label>
                        <input type="radio" value='Invierno' name='season' onChange={handleInputChange} />
                        Invierno</label>
                    <label>
                        <input type="radio" value='Primavera' name='season' onChange={handleInputChange} />
                        Primavera</label>
                    {errors.season && <span> - {errors.season}</span>}
                </div>

                <div className={s.formDiv}>
                    <label>Select activity countries: </label>
                    <select name="countries" onChange={(e) => handleAddCountry(e)} defaultValue={'default'}>
                        <option value={'default'} disabled>Select countries</option>
                        {countries.map((country, idx) => (
                            <option key={idx} value={country.name}>{country.name}</option>
                        ))}
                    </select>
                    {input.countries.map((c, idx) =>
                        <div key={idx}>
                            <p>{c} <button onClick={(e) => handleDeleteCountry(e, c)}>Remove</button></p>
                        </div>
                    )}
                </div>
                <input type="submit" disabled={!change ? true : errors.name || errors.duration || errors.difficulty || errors.season || errors.countries ? true : false} />
            </form>
            <Link to='/home'>
                <button className={s.button} >Back</button>
            </Link>
        </div >
    );
}