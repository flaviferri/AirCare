import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import useApi from "../data_API/useApi";

const Map = ({ city }) => {
  const { data, loading, error } = useApi(city);
  console.log(data);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Error al cargar datos: {error.message}</p>;
  }

  if (!data || data.status === "error") {
    return <p>No se encontraron datos para la ciudad {city}</p>;
  }

  const {
    aqi,
    attributions,
    city: { name },
  } = data.data;

  const hasAttributions =
    Array.isArray(attributions) && attributions.length > 0;

  return (
    <>
      <Navbar />
      <div className="map-container">
        <h1>Calidad del Aire en {name}</h1>
        <p>AQI: {aqi}</p>
        {hasAttributions && (
          <div>
            <h3>Atribuciones:</h3>
            <ul>
              {attributions.map((attribution, index) => (
                <li key={index}>
                  <a
                    href={attribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {attribution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Map;
