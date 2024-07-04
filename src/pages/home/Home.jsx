import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
