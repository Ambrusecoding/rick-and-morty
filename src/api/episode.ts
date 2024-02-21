import { instance } from "./base.api";

const episode = "episode";
export const episodes = {
  getEpisode: function ({
    page,
    name,
    airdate,
  }: {
    page: number;
    name: string;
    airdate: string;
  }) {
    return instance.get(episode, {
      params: {
        page,
        name,
        airdate,
      },
    });
  },

  getById: function ({ id }: { id: string | undefined }) {
    return instance.get(`${episode}/${id}`);
  },
};
