import { ICharacter } from "../pages/characters/interface/character.interface";
import { TypeEpisodeApi, TypeEpisodeDOM } from "../pages/episodes/interface";
import { instance, BASE_URL } from "./base.api";

const episode = "episode";
export const episodes = {
  getEpisode: function ({
    id,
    page,
    name,
    airdate,
  }: {
    id?: number;
    page: number;
    name: string;
    airdate: string;
  }) {
    return instance.get(episode, {
      params: {
        id,
        page,
        name,
        airdate,
      },
    });
  },

  getEpisodeById: async function ({ id }: { id: string | undefined }) {
    const episodeData = (await instance.get(`${episode}/${id}`))
      .data as TypeEpisodeApi;
    const characterIds = episodeData.characters.map((url) => {
      const urlParts = url.split("/");
      return urlParts[urlParts.length - 1];
    });
    const characters = await episodes.getCharactersByEpisode({
      ids: characterIds,
    });
    const episodeDataDOM: TypeEpisodeDOM = {
      id: episodeData.id,
      name: episodeData.name,
      airDate: episodeData.air_date,
      episode: episodeData.episode,
      characters: characters,
      url: episodeData.url,
      created: episodeData.created,
    };
    return episodeDataDOM;
  },

  getCharactersByEpisode: async function ({ ids }: { ids: string[] }) {
    try {
      const res = await instance.get(createEndPoint({ ids }));
      const characterDemo = res.data as ICharacter[];
      return characterDemo;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

function createEndPoint({ ids }: { ids: string[] }) {
  return `${BASE_URL}/character/${ids.join(",")}`;
}
