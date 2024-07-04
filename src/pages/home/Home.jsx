import "./../../../public/css/styles.css";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import  Banner  from "../../components/banner/Banner";
import  Cards  from "../../components/cards/Cards";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <div class="container">
      <img src="./../../../src/assets/images/viento.png" alt="AirCare Logo"/>
      <h1>AirCare</h1>
    </div>
    <Cards/>
    <Footer/>
    </>
  );
};

export default Home;
