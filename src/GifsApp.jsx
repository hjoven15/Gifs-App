import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CurrentGifs } from "./gifs/CurrentGifs";
// import { mockGifs } from "./mock-data/gif.mock";
import { useState } from "react";
import { getGifsByQuery } from "./actions/getGifsByQuery";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState([]);
  const [gifs, setGifs] = useState([]);

  const handleSearch = (search = "") => {
    const newSearch = search.trim().toLowerCase();
    if (previousSearches.includes(newSearch)) return;
    if (newSearch === "") return;
    setPreviousSearches([newSearch, ...previousSearches].slice(0, 10));
  };

  const handlePreviousSearchClick = async (search) => {
    const result = await getGifsByQuery(search);
    setPreviousSearches(previousSearches.filter((s) => s !== search));
    setGifs([...result, ...gifs]);
  };

  return (
    <>
      {/* Componente Header */}
      <Header title="GifsApp" description="Buscador de Gifs" />

      {/* Componente Search */}
      <Search placeholder="Buscar Gifs en Giphy..." onSearch={handleSearch} />

      {/* Componente Gifs previos */}
      <PreviousSearches
        searches={previousSearches}
        onPreviousSearchClick={handlePreviousSearchClick}
      />

      {/* Componente Gifs */}
      <CurrentGifs gifs={gifs} />
    </>
  );
};
