import { ICharacter } from "../pages/characters/interface/character.interface";
import { instance } from "./base.api";
const endpoint = "character";

export const characters = {
  getAllCharacters: function ({
    page,
    status,
    name,
    species,
    gender,
  }: {
    page: number;
    status: string;
    name: string;
    species: string;
    gender: string;
  }) {
    return instance.get(endpoint, {
      params: {
        page,
        status,
        name,
        species,
        gender,
      },
    });
  },

  //populate the character with the episodes
  getByIdCharacters: async function ({ id }: { id: string | undefined }) {
    try {
      const res = await instance.get(`${endpoint}/${id}`);
      const characterDemo = res.data as ICharacter;
      const episodeIds = characterDemo.episode.map((episode: string) =>
        episode.split("/").pop()
      ) as string[];
      const episodes = await Promise.all(
        episodeIds.map((episodeId: string) =>
          //suprimir then y usar await
          instance.get(`episode/${episodeId}`).then((r) => r.data)
        )
      );
      characterDemo.episodes = episodes;
      return characterDemo;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  //call api to show episodes https://rickandmortyapi.com/api/episode
};
