import React from 'react';

const DataCountry = ({display, country}) => {
    switch (display) {
        case 'location':
            return (
                <>
                    <h3>Location</h3>
                    <p><b>Continent: </b>{country.continents?.[0]}</p>
                    <p><b>Region: </b>{country.region}</p>
                    <p><b>Subregion: </b>{country.subregion}</p>
                </>
            )
        case 'capital':
            return (
                <>
                    <h3>Capital</h3>
                    <p><b>Capital: </b>{country.capital}</p>
                </>
            )
        default:
            return (
                <>
                    <h3>Demography</h3>
                    <p><b>Population: </b>{country.population}</p>
                    <p><b>Area: </b>{country.area}</p>
                </>
            )
    }
};

export default DataCountry;