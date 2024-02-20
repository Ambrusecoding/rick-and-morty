import React from "react";
import { characters } from "../../api/characters";
import { CardComponent } from "../../components/CardCharacter/Card";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { TypeCharacter } from "./interface/characters.interface";
import SearchBar from "../../components/SearchBar";

const HomePage = () => {
  const [allCharacters, setAllcharacters] = React.useState<
    TypeCharacter[] | null
  >(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const [filter, setFilter] = React.useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({
        page: page,
        status: filter.status,
        name: filter.name,
        species: filter.species,
        gender: filter.gender,
      })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllcharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page, filter]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ display: "flex", mt: 2, mb: 2, justifyContent: "center" }}>
        <Typography variant={matches ? "h4" : "h1"}>Personajes</Typography>
      </Box>
      <SearchBar setFilter={setFilter} />
      <Container sx={{ paddingBottom: "50px" }} maxWidth="xl">
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
                      id={character.id}
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
    </>
  );
};
export default HomePage;
