import React, { useState } from "react";

export default function Search({ onSearch }) {
    const [country, setCountry] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(country);
        }}>
            <input
                type="text"
                placeholder="write country to search"
                value={country}
                onChange={e => setCountry(e.target.value)}
            />
            <input type="submit" value="Agregar" />
        </form>
    );
}
