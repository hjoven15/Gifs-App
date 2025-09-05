import PropTypes from "prop-types";

export const Header = ({ title, description }) => {
  return (
    <>
      <div className="content-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
