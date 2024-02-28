import React from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { CardEpisode } from "../../components/CardEpisode/CardEpisode";

import useEpisodeData from "./hooks/useEpisodesData";

const Episodes = () => {
  const { allEpisodes, loading, page, count, setPage } = useEpisodeData();

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
                    id={episodes.id}
                    name={episodes.name}
                    airdate={episodes.airDate}
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
export default Episodes;
