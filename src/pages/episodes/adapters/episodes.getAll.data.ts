import { TypeEpisode, TypeEpisodeApi } from "../interface";

export const EpisodeGetAllAdapter = (data: TypeEpisodeApi[]): TypeEpisode[] => {
  return data.map((episode) => {
    return {
      id: episode.id,
      name: episode.name,
      airDate: episode.air_date,
      episode: episode.episode,
      characters: episode.characters,
      url: episode.url,
      created: episode.created,
    };
  });
};
