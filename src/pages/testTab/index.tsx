import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EpisodesComponent from "../episodes";
import HomePage from "../home";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { FavoriteCharacters } from "../../components/FavoriteCharacters/FavoriteCharacters";
import { ROUTES } from "../../Router";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ value }: { value: number }) {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.favoriteReducer);

  /* Forma con switch
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/episodes");
        break;
      case 2:
        navigate("/favorites");
        break;
      default:
        break;
    }
  };
*/

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) navigate(ROUTES.HOME);
    if (newValue === 1) navigate(ROUTES.ALL_EPISODES);
    if (newValue === 2) navigate(ROUTES.FAVORITES);
  };

  /* Forma con arreglo de rutas

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
   const navigationRoutes = [Routes.HOME,Routes.EPISODES,Routes.FAVORITES]
    navigate(navigationRoutes[newValue])
}
   */

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personajes" {...a11yProps(0)} />
          <Tab label="Episodios" {...a11yProps(1)} />
          <Tab label={`Favoritos (${items.length})`} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HomePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EpisodesComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FavoriteCharacters />
      </CustomTabPanel>
    </Box>
  );
}
