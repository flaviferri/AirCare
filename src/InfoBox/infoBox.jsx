import React, { useState} from "react";
import useApi from "../useApi";


const pokemonUrl= "https://pokeapi.co/api/v2/pokemon"

const InfoBox = () => {
const {data, error } = useApi(pokemonUrl)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        if (data && data.results && Array.isArray(data.results)) {
            const pokemon = data.results.find(item =>
                item.name.toLowerCase() === searchInput.toLowerCase()
            );
            setSelectedCountry(pokemon || null);
        } 
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="title">
                <h3> Real-time Air Quality Index (AQI).</h3>
            </div>
            <div className="searchField">
                <label htmlFor="search" className="searchLabel">Ingresa el nombre del Pokémon:</label>
                <input
                    type="text"
                    id="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Escribe el nombre del Pokémon"
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
            {selectedCountry ? (
                <div className="pokemon-info">
                    <h4>{selectedCountry.name}</h4>
                    <p>URL: {selectedCountry.url}</p>
                </div>
            ) : (
                <p>No se ha seleccionado ningún Pokémon o no se encontró el Pokémon</p>
            )}
        </div>
    );
};

export default InfoBox;