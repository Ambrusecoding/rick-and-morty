import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Zoom from "@mui/material/Zoom";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import BlockIcon from "@mui/icons-material/Block";

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
  const navigate = useNavigate();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        minHeight: "680px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          onClick={() => navigate(`/characters/${id}`)}
          fullWidth
          variant="contained"
          size="small"
        >
          Más información
        </Button>
      </CardActions>
    </Card>
  );
};
