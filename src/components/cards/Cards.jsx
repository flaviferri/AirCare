
import PropTypes from "prop-types";
import "./Cards.scss";

const Cards = ({ title, content }) => {
  return (
    <div className="ContainerCards">
      <div className="Cards">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="Cards">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="Cards">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Cards;
