import { instance } from "./base.api";
const endpoint = "character";


export const characters = {
  getAll: function ({
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
  getById: function ({ id }: { id: string | undefined }) {
    return instance.get(`${endpoint}/${id}`);
  },
  //call api to show episodes https://rickandmortyapi.com/api/episode
};
