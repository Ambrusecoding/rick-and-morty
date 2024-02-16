import React from "react";
import { characters } from "../../api/characters";
import Navbar from "../../components/Navbar";
import { CardComponent } from "../../components/Card/Card";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { TypeCharacter } from "./interface/characters.interface";

const HomePage = () => {
  const [allCharacters, setAllcharacters] = React.useState<
    TypeCharacter[] | null
  >(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllcharacters(r.data.results);
        console.log(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", mt: 2, mb: 2, justifyContent: "center" }}>
        <Typography variant="h1">Personajes</Typography>
      </Box>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            {allCharacters?.length !== 0 ? (
              <Grid container spacing={5}>
                {allCharacters?.map((character) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                    <CardComponent
                      key={character.id}
                      name={character.name}
                      image={character.image}
                      gender={character.gender}
                      species={character.species}
                      status={character.status}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div>No existe data</div>
            )}
          </Box>
        )}
      </Container>
    </>
  );
};
export default HomePage;
