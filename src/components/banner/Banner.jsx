const Banner = () => {
  return (
    <div
      className="relative items-center justify-center h-100 bg-cover bg-center"
      style={{ backgroundImage: "url(./src/assets/images/banner.png)" }}
    >
      <div className="relative text-center text-white">
        <h1 className="text-4xl text-center text-white md:text-6xl font-bold mb-4">
          {" "}
          AirCare
        </h1>
        <p className="text-lg md:text-2xl"></p>
      </div>
    </div>
  );
};

export default Banner;
