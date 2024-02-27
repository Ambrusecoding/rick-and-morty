import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { episodes } from "../../api/episode";
import { TypeEpisodeDOM } from "../episodes/interface";
import { CardComponent } from "../../components/CardCharacter/Card";

const EpisodeComponent = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [episode, setEpisode] = React.useState<TypeEpisodeDOM | null>(null);

  React.useEffect(() => {
    setLoading(true);
    episodes
      .getEpisodeById({ id })
      .then((data) => {
        console.log(data);
        setEpisode(data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <Container
      sx={{
        width: "100vw !important",
        height: "100vh",
        paddingBottom: "100px",
      }}
    >
      {loading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container
          sx={{
            marginTop: "100px",
            marginBottom: "100px",
            backgroundColor: "#1B4242",
            padding: "50px 50px !important",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
          maxWidth="xl"
        >
          <Box sx={{ gap: "100px", display: "flex", flexDirection: "row" }}>
            <Box sx={{ height: "auto " }}>
              <h1>Información de Episodio</h1>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                height: "auto ",
              }}
            >
              <h1>{episode?.name}</h1>

              <p>Episodio: {episode?.episode}</p>
              <p>Fecha al aire: {episode?.airDate}</p>
              <p style={{ fontWeight: "bold" }}> Apariciones:</p>
            </Box>
          </Box>
          <Grid container spacing={5}>
            {episode?.characters?.map((character) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={character.id}>
                <CardComponent
                  name={character.name}
                  image={character.image}
                  gender={character.gender}
                  species={character.species}
                  status={character.status}
                  id={character.id}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Container>
  );
};
export default EpisodeComponent;
