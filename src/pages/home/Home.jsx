import "./../../../public/css/styles.css"
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import  Banner  from "../../components/banner/Banner";
import  Cards  from "../../components/cards/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
    <Banner></Banner>
    <Cards></Cards>
      <h1>Hola soy la Home</h1>
      <Footer />
    </>
  );
};

export default Home;
