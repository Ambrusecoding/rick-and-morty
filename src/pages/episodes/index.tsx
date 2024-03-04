import React from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CardEpisode } from "../../components/CardEpisode/CardEpisode";

import useEpisodeData from "./hooks/useEpisodesData";
import { CardSkeleton } from "../../components/CardSkeleton/Card";

const Episodes = () => {
  const { allEpisodes, loading, page, count, setPage } = useEpisodeData();

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const noData = "No existe información para mostrar.";

  return (
    <>
      <Box sx={{ display: "flex", mt: 2, mb: 2, justifyContent: "center" }}>
        <Typography variant={matches ? "h4" : "h1"}>Episodios</Typography>
      </Box>

      <Container sx={{ py: 6 }} maxWidth="xl">
        {loading ? (
          [1, 2, 3, 4].map((item) => (
            <Grid container spacing={5}>
              {allEpisodes?.map(() => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                  <CardSkeleton />
                </Grid>
              ))}
            </Grid>
          ))
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
              <div>{noData}</div>
            )}
            <Box
              sx={{
                pt: 6,
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
    </>
  );
};
export default Episodes;
