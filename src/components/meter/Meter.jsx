const Meter = () => {
    return (
      <div className="flex items-center justify-center bg-white h-30 py-6 m-10 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4 max-w-xl">
          <img
            className="w-1/4 md:w-1/4 rounded-lg"
            src="./src/assets/images/cr2.png"
            alt="Sensor de Aire"
          />
          <div className="text-center text-stone-900">
            <h1 className="text-xl md:text-2xl font-bold mb-4">
              ¡Coloca un sensor en tu zona!
            </h1>
            <p className="text-m md:text-xl text-stone-800">
              Mide partículas PM2.5 y PM10, niveles de CO2, VOCs (Compuestos Orgánicos Volátiles) y más.
              <br />
              Con ello ayudarás a que podamos controlar la contaminación en más zonas.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Meter;
  