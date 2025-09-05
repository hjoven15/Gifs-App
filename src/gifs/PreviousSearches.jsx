import PropTypes from "prop-types";

export const PreviousSearches = ({ searches, onPreviousSearchClick }) => {

  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onPreviousSearchClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

PreviousSearches.propTypes = {
  searches: PropTypes.array.isRequired,
  onPreviousSearchClick: PropTypes.func.isRequired,
};
