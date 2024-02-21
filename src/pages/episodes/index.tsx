import React from "react";
import { episodes } from "../../api/episode";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { TypeEpisode } from "./interface";
import { CardEpisode } from "../../components/CardEpisode/CardEpisode";

const EpisodesComponent = () => {
  const [allEpisodes, setAllEpisodes] = React.useState<TypeEpisode[] | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    episodes
      .getEpisode({
        page: page,
        name: "",
        airdate: "",
      })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllEpisodes(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container sx={{ padding: "200px 0px !important" }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {allEpisodes?.length !== 0 ? (
            <Grid spacing={5} container>
              {allEpisodes?.map((episodes) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={episodes.id}>
                  <CardEpisode
                    key={episodes.id}
                    name={episodes.name}
                    airdate={episodes.airdate}
                    episode={episodes.episode}
                    created={episodes.created}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div>No existe data</div>
          )}
          <Box
            sx={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
            />
          </Box>
        </Box>
      )}
    </Container>
  );
};
export default EpisodesComponent;
