import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Zoom from "@mui/material/Zoom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";

type CardProps = {
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
};

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  species,
  status,
  gender,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4">{name}</Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            Genero :{" "}
            {gender == "Male" ? (
              <Tooltip TransitionComponent={Zoom} title="Masculino">
                <MaleIcon />
              </Tooltip>
            ) : (
              <Tooltip TransitionComponent={Zoom} title="Femenino">
                <FemaleIcon />
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
        <Button fullWidth variant="contained" size="small">
          Más información
        </Button>
      </CardActions>
    </Card>
  );
};
