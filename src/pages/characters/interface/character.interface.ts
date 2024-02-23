import { TypeEpisodeDOM } from "../../episodes/interface";
export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
  episodes?: TypeEpisodeDOM[];
}

export interface Location {
  name: string;
  url: string;
}
