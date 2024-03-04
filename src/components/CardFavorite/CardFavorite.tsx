import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDispatch } from "react-redux";
import { removeFavoriteCharacter } from "../../redux/slices/character.slice";

type CardProps = {
  name: string;
  image: string;
  id: number | string;
};

export const CardFavorite: React.FC<CardProps> = ({ image, name, id }) => {
  const navigate = useNavigate();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteCharacter({ id }));
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
            <Box>
              <Typography variant="h6">Eliminar personaje:</Typography>
            </Box>
            <Box>
              <IconButton onClick={handleRemoveFavorite}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
          </Box>
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
