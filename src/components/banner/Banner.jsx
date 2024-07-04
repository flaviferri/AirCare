const Banner = () => {
  return (
    <div
      className="relative items-center justify-center h-100 bg-cover bg-center"
      style={{ backgroundImage: "url(./src/assets/images/banner.png)" }}
    >
      <div className="relative text-center h-100 text-white">
        <h1 className="text-3xl text-center h-100 text-white md:text-6xl font-bold mb-4">
          {" "}
          AirCare
        </h1>
        <p className="text-lg md:text-xl text-gray-100 pb-4">Por un aire mejor</p>
      </div>
    </div>
  );
};

export default Banner;
