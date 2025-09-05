import PropTypes from "prop-types";

export const CurrentGifs = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <p>{gif.title}</p>
        </div>
      ))}
    </div>
  );
};

CurrentGifs.propTypes = {
  gifs: PropTypes.array.isRequired,
};
