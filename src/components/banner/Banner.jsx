import "./Banner.scss";

const Banner = (title, content) => {
  return (
      <div className="Banner">
        <div className="Title">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
    </div>
  );
};
export default Banner;