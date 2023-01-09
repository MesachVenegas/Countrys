import { useState, useEffect } from 'react';
import DataCountry from '../DataCountry/DataCountry';
import React from 'react';
import axios from 'axios';

const CountryApi = () => {
    const [country, setCountry] = useState({});
    const [display, setDisplay] =useState('demography')


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/alpha/mx')
        .then(res => setCountry((res.data[0])))
    },[])



    return (
        <div>
            <h1>{country.name?.official}</h1>
            <img src={country.flags?.png} alt={country.name?.official} />
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