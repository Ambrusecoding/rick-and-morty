import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
import { Box, CircularProgress, Container } from "@mui/material";

const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [character, setCharacter] = React.useState<ICharacter | null>(null);
  React.useEffect(() => {
    setLoading(true);
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <Container sx={{ width: "100vw !important", height: "100vh" }}>
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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1B4242",
            padding: "50px 50px !important",
            display: "flex",
            borderRadius: "10px",
            flexDirection: "row",
            gap: "100px",
          }}
          maxWidth="md"
        >
          <Box sx={{ height: "auto " }}>
            <h1>Información de personaje</h1>
            <img
              style={{ borderRadius: "10px" }}
              src={character?.image}
              alt={character?.name}
            />
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
            <h1>{character?.name}</h1>
            <p>Estado: {character?.status}</p>
            <p>Especie: {character?.species}</p>
            <p>Tipo {character?.type}</p>
            <p>Genero: {character?.gender}</p>
            <p>Origen: {character?.origin.name}</p>
            <p style={{ fontWeight: "bold" }}> Apariciones:</p>
            <ol
              style={{
                marginTop: "10px",
                height: "200px",
                overflow: "auto",
                border: "1px solid",
                padding: " 0px 30px",
                borderRadius: "10px",
              }}
            >
              {character?.episodes?.map((episode) => (
                <li key={episode.id}>{episode.name}</li>
              ))}
            </ol>
          </Box>
        </Container>
      )}
    </Container>
  );
};
export default CharacterPage;
