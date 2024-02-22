import { ReactNode, useState } from "react";
import EpisodeContext from "./Context";
import { TypeEpisode } from "../interface";

// Componente que provee el contexto

const EpisodesProvider = ({ children }: { children: ReactNode }) => {
  // Aquí puedes definir el estado o cualquier otra lógica que desees compartir en el contexto
  const [allEpisodes, setAllEpisodes] = useState<TypeEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  return (
    <EpisodeContext.Provider
      value={{
        allEpisodes,
        setAllEpisodes,
        loading,
        setLoading,
        page,
        setPage,
        count,
        setCount,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};

export default EpisodesProvider;
