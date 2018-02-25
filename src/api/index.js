import config from './config';

const API_KEY = config.apiKey;

const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${API_KEY}&format=json`;

const URL_COUNTRIES = `https://restcountries.eu/rest/v2/all`;

function getCountries()
{
    return fetch(URL_COUNTRIES)
        .then( res => res.json() )
        .then( json => json )
}

function getArtists(country)
{
    country = country.toLowerCase();
    const url = URL.replace(':country', country)
    return fetch(url)
        .then( res =>  res.json() )
        .then( json => json.topartists.artist )
}

export { getCountries, getArtists }