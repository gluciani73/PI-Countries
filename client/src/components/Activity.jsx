import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity } from '../redux/actions';
import { useHistory } from 'react-router';
// import s from 'Activity.module.css';

// function validate(input) {
//     let errors = {};
//     // if (!input.username) {
//     //     errors.username = 'Username is required';
//     // } else if (!/\S+@\S+\.\S+/.test(input.username)) {
//     //     errors.username = 'Username is invalid';
//     // }
//     // if (!input.password) {
//     //     errors.password = 'Password is required';
//     // } else if (!/(.*[0-9].*)/.test(input.password)) {
//     //     errors.password = 'Password is invalid';
//     // }
//     // return errors;

//     // if (!/^[A-Za-z0-9\s]+$/g.test(input)) {
//     //     setErrors('Just letters an numbers as activity name');
//     // } else {
//     //     setErrors({});
//     // }
//     // setActivityName(input);
// }

export default function Activity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector(state => state.allCountries)

    const [input, setInput] = useState(
        {
            name: '',
            difficulty: 0,
            duration: '',
            season: '',
            countries: []
        });

    const [errors, setErrors] = useState({});

    const handleInputChange = function (e) {
        // setErrors(validate({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }));
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
    };

    const handleAddCountry = (e) => {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        }

        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addActivity(input));
        setInput({
            name: '',
            difficulty: 0,
            duration: '',
            season: '',
            countries: []
        });
        alert('Se creo la actividad');
        // https://v5.reactrouter.com/web/api/Hooks/usehistory
        history.push('/home');
    }


    return (
        <div>
            <h2>Create Activity</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label >Name: </label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={handleInputChange}
                        placeholder="Activity name"
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
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
                </div>
                <div>
                    <label>Duration: </label>
                    <input
                        type="text"
                        value={input.duration}
                        name="duration"
                        onChange={handleInputChange}
                        placeholder="Duration" />
                    {errors.duration && <span>{errors.duration}</span>}
                </div>
                <div>
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
                </div>

                <div>
                    <label>Select activity countries: </label>
                    <select name="countries" onChange={(e) => handleAddCountry(e)}>
                        {countries.map((country) => (
                            <option value={country.name}>{country.name}</option>
                        ))}
                    </select>

                    {input.countries.map((c) =>
                        <div>
                            <p>{c}</p>

                        </div>
                    )}

                </div>


                <input type="submit" />
            </form>
        </div>
    );
}