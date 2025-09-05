import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Search = ({ placeholder, onSearch }) => {
  const [search, setSearch] = useState("");

  /*
    useEffect
      permite realizar efectos secundarios en componentes funcionales.
      Los efectos secundarios son operaciones que ocurren fuera del flujo normal de renderizado.
      - Llamadas a APIs
      - Temporizadores
      - Logging
    https://es.react.dev/reference/react/useEffect#useeffect
  */


  // debounce: se ejecuta cuando el usuario deja de escribir
  // espera 1 segundo para ejecutar la función onSearch
  // el useEffect se ejecuta cada vez que cambia el valor de onSearch
  // el useEffect se ejecuta cada vez que cambia el valor de search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") return;
      onSearch(search);
      setSearch("");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search, onSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    onSearch(search);
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
      setSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
