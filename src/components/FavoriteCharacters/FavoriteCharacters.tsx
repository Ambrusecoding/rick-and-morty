import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { CardFavorite } from "../CardFavorite/CardFavorite";

export const FavoriteCharacters = () => {
  const items = useAppSelector((state) => state.favoriteReducer);
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ display: "flex", mt: 2, mb: 2, justifyContent: "center" }}>
        <Typography variant={matches ? "h4" : "h1"}>Favoritos</Typography>
      </Box>
      <Container sx={{ paddingBottom: "50px" }} maxWidth="xl">
        <Box>
          {items?.length !== 0 ? (
            <Grid container spacing={5}>
              {items?.map((character) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                  <CardFavorite
                    id={character.id}
                    image={character.image}
                    name={character.name}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div>No personajes favoritos seleccionados</div>
          )}

          <Box
            sx={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          ></Box>
        </Box>
      </Container>
    </>
  );
};
