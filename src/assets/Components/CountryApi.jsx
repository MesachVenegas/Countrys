import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const CountryApi = () => {
    const [country, setCountry] = useState({});
    const [display, setDisplay] =useState('demography')


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/alpha/mx')
        .then(res => setCountry((res.data[0])))
    },[])


    const showInfo = () =>{
        switch(display){
            case 'demography':
                return (
                    <>
                        <h3>Demography</h3>
                        <p><b>Population: </b>{country.population}</p>
                        <p><b>Area: </b>{country.area}</p>
                    </>
                )
            case 'location':
                return(
                    <>
                        <h3>Location</h3>
                        <p><b>Continent: </b>{country.continents?.[0]}</p>
                        <p><b>Region: </b>{country.region}</p>
                        <p><b>Subregion: </b>{country.subregion}</p>
                    </>
                )
            case 'capital':
                return(
                    <>
                        <h3>Capital</h3>
                        <p><b>Capital: </b>{country.capital}</p>
                    </>
                )
        }
    }

    return (
        <div>
            <h1>{country.name?.official}</h1>
            <img src={country.flags?.png} alt={country.name?.official} />
            <div className="container__btns">
                <button onClick={() => setDisplay('demography')}>Demography</button>
                <button onClick={() => setDisplay('location')}>Location</button>
                <button onClick={() => setDisplay('capital')}>Capital</button>
            </div>
            {showInfo()}
        </div>
    );
};

export default CountryApi;