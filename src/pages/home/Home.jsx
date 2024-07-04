import "./../../../public/css/styles.css"
import "./Home.scss";
import  Banner  from "../../components/banner/Banner";
import  Cards  from "../../components/cards/Cards";

const Home = () => {
  return (
    <>
    <Banner></Banner>
    <Cards></Cards>
      <h1>Hola soy la Home</h1>
    </>
  );
};

export default Home;
