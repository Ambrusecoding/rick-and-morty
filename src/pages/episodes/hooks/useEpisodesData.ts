import { useContext, useEffect } from "react";
import { episodes } from "../../../api/episode";
import EpisodeContext from "../context/Context";
import { EpisodeGetAllAdapter } from "../adapters/episodes.getAll.data";

function useEpisodeData() {
  const {
    setLoading,
    setCount,
    setAllEpisodes,
    allEpisodes,
    page,
    count,
    loading,
    setPage,
  } = useContext(EpisodeContext);
  useEffect(() => {
    setLoading(true);
    episodes
      .getEpisode({
        page: page,
        name: "",
        airdate: "",
      })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllEpisodes(EpisodeGetAllAdapter(r.data.results));
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    page,
    allEpisodes,
    count,
    loading,
    setAllEpisodes,
    setPage,
  };
}

export default useEpisodeData;
