import { ICharacter } from "../../characters/interface/character.interface";

export interface TypeEpisodeDOM {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: ICharacter[];
  url: string;
  created: Date;
}

export interface TypeEpisodeApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
