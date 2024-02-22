import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Zoom from "@mui/material/Zoom";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import BlockIcon from "@mui/icons-material/Block";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavoriteCharacter } from "../../redux/slices/character.slice";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

type CardProps = {
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
  id: number;
};

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  species,
  status,
  gender,
  id,
}) => {
  const [disableBtn, setDisableBtn] = React.useState(false);
  const navigate = useNavigate();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const itemExist = useAppSelector((state) => state.favoriteReducer);
  React.useEffect(() => {
    setDisableBtn(itemExist.some((item) => item.id === id));
  }, [itemExist, id]);
  const handleAddFavorite = () => {
    dispatch(addFavoriteCharacter({ id, name, info: status, image }));
  };
  return (
    <Card
      sx={{
        borderRadius: "20px",
        minHeight: "680px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "20px",
      }}
    >
      <CardMedia
        sx={{
          minHeight: "340px",
        }}
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant={matches ? "h5" : "h4"}>{name}</Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Genero :{" "}
              {gender === "Female" ? (
                <Tooltip TransitionComponent={Zoom} title={gender}>
                  <FemaleIcon />
                </Tooltip>
              ) : gender === "Male" ? (
                <Tooltip TransitionComponent={Zoom} title={gender}>
                  <MaleIcon />
                </Tooltip>
              ) : gender === "Genderless" ? (
                <Tooltip TransitionComponent={Zoom} title={gender}>
                  <BlockIcon />
                </Tooltip>
              ) : (
                <Tooltip TransitionComponent={Zoom} title={gender}>
                  <NoAccountsIcon />
                </Tooltip>
              )}
            </Box>
            <Box>
              <Button onClick={handleAddFavorite} disabled={disableBtn}>
                <Tooltip TransitionComponent={Zoom} title="Agregar a Favoritos">
                  <FavoriteIcon color={disableBtn ? "error" : "action"} />
                </Tooltip>
              </Button>
            </Box>
          </Box>
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          Especie : {species}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          Estado : {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ margin: "auto", width: "80%" }}
          onClick={() => navigate(`/characters/${id}`)}
          fullWidth
          variant="contained"
          size="large"
        >
          Más información
        </Button>
      </CardActions>
    </Card>
  );
};
