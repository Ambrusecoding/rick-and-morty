import { createContext } from "react";
import { TypeEpisodeDOM } from "../interface";
// Crear el contexto

interface EpisodeContextState {
  allEpisodes: TypeEpisodeDOM[];
  setAllEpisodes: (value: TypeEpisodeDOM[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
  count: number;
  setCount: (value: number) => void;
}

const initialState: EpisodeContextState = {
  allEpisodes: [],
  setAllEpisodes: () => {},
  loading: true,
  setLoading: () => {},
  page: 1,
  setPage: () => {},
  count: 1,
  setCount: () => {},
};

const EpisodeContext = createContext<EpisodeContextState>(initialState);

export default EpisodeContext;
