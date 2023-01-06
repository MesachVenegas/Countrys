import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const CountryApi = () => {
    const [country, setCountry] = useState({});
    const [showDemography, setShowDemography] = useState(true);
    const [showLocation, setShowLocation] = useState(false);
    const [showCapital, setShowCapital] = useState(false);

    const demographyItem = () => {
        setShowDemography(!showDemography);
        setShowLocation(false);
        setShowCapital(false);
    }
    const locationItem = () => {
        setShowLocation(!showLocation);
        setShowDemography(false);
        setShowCapital(false);
    }
    const capitalItem = () => {
        setShowCapital(!showCapital);
        setShowLocation(false);
        setShowDemography(false);
    }


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/alpha/mx')
        .then(res => setCountry((res.data[0])))
    },[])


    return (
        <div>
            <h1>{country.name?.official}</h1>
            <img src={country.flags?.png} alt={country.name?.official} />
            <div className="container__btns">
                <button onClick={demographyItem}>Demography</button>
                <button onClick={locationItem}>Location</button>
                <button onClick={capitalItem}>Capital</button>
            </div>
            {
                showDemography ?
                (
                    <>
                        <h3>Demography</h3>
                        <p><b>Population: </b>{country.population}</p>
                        <p><b>Area: </b>{country.area}</p>
                    </>
                ) : null

            }
            {
                showLocation ? (
                    <>
                        <h3>Location</h3>
                        <p><b>Continent: </b>{country.continents?.[0]}</p>
                        <p><b>Region: </b>{country.region}</p>
                        <p><b>Subregion: </b>{country.subregion}</p>
                    </>
                ) : null

            }

            {
                showCapital ? (
                    <>
                        <h3>Capital</h3>
                        <p><b>Capital: </b>{country.capital}</p>
                    </>
                ) : null

            }

        </div>
    );
};

export default CountryApi;