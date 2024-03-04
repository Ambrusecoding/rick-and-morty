import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const CardSkeleton = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Card>
      <CardMedia>
        <Skeleton
          variant="rectangular"
          width={matches ? 300 : 400}
          height={matches ? 300 : 400}
        />
      </CardMedia>
      <CardContent>
        <Typography variant={matches ? "h5" : "h4"}>
          <Skeleton />
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
      </CardContent>
    </Card>
  );
};
