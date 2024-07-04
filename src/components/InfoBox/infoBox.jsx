import  { useState } from 'react';
const appInfo = "https://api.waqi.info/feed/";
const token = "29814c6e83c60b9a6a16c7b6edad9b455ba84c98"; 

const InfoBox = () => {
    const [searchInput, setSearchInput] = useState('');
    const [airQualityData, setAirQualityData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(`${appInfo}${searchInput}/?token=${token}`);
            const data = await response.json();
            if (data.status === 'ok') {
                setAirQualityData(data.data);
                setError(null);
            } else {
                setAirQualityData(null);
                setError(data.data);
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className="container">
            <div className="title">
                <h3>Real-time Air Quality Index (AQI)</h3>
            </div>
            <div className="searchField">
                <label htmlFor="search" className="searchLabel">Enter city name:</label>
                <input
                    type="text"
                    id="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Type city name"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {(searchInput === '' && !airQualityData && !error) ? null : (
                <>
                    {error ? (
                        <div>Error: {error}</div>
                    ) : airQualityData ? (
                        <div className="airQualityInfo">
                            <h4>{airQualityData.city.name}</h4>
                            <p>AQI: {airQualityData.aqi}</p>
                            <p>PM2.5: {airQualityData.iaqi.pm25?.v}</p>
                            <p>PM10: {airQualityData.iaqi.pm10?.v}</p>
                            <p>O3: {airQualityData.iaqi.o3?.v}</p>
                            <p>NO2: {airQualityData.iaqi.no2?.v}</p>
                        </div>
                    ) : (
                        <p>No data available. Try another city.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default InfoBox;