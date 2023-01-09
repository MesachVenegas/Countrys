import { useState, useEffect } from 'react';
import DataCountry from '../DataCountry/DataCountry';
import React from 'react';
import axios from 'axios';

const CountryApi = () => {
    const [country, setCountry] = useState({});
    const [display, setDisplay] =useState('demography')
    const [search, setSearch] = useState('mx')


    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${search}`)
        .then(res => setCountry((res.data[0])))
    },[])

    const alertMsg = () =>{
        axios.get(`https://restcountries.com/v3.1/name/${search}`)
            .then(res => setCountry((res.data[0])))
    }


    return (
        <div>
            <div className="search">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                <button onClick={alertMsg}>Search</button>
            </div>
            <p>{search}</p>
            <br />
            <h1>{country.name?.official}</h1>
            <img src={country.flags?.png} alt={country.name?.official} />
            <br />
            <div className="container__btns">
                <button onClick={() => setDisplay('demography')}>Demography</button>
                <button onClick={() => setDisplay('location')}>Location</button>
                <button onClick={() => setDisplay('capital')}>Capital</button>
            </div>
            <div className="country__data">
                <DataCountry display={display} country={country}/>
            </div>
        </div>
    );
};

export default CountryApi;