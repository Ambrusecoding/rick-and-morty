import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id: number;
  name: string;
  airdate: string;
  episode: string;
  created: Date;
};

export const CardEpisode: React.FC<CardProps> = ({
  id,
  name,
  airdate,
  episode,
}) => {
  const navigate = useNavigate();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  console.log("id", id);
  return (
    <Card sx={{ borderRadius: "20px" }}>
      <CardContent>
        <Typography variant={matches ? "h5" : "h4"}>{name}</Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          Nombre del episodio : {name}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          Fecha de emisión : {airdate}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          Episodio : {episode}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/episode/${id}`)}
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
