import { ICharacter } from "../pages/characters/interface/character.interface";
import {
  TypeEpisodeApi,
  TypeEpisodeDOM,
} from "./../pages/episodes/interface/index";

export const episodeAdapter = (
  episodeDataAPI: TypeEpisodeApi,
  characters: ICharacter[]
): TypeEpisodeDOM => {
  return {
    id: episodeDataAPI.id,
    name: episodeDataAPI.name,
    airDate: episodeDataAPI.air_date,
    episode: episodeDataAPI.episode,
    characters: characters,
    url: episodeDataAPI.url,
    created: episodeDataAPI.created,
  };
};
