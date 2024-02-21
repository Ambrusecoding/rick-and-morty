import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

interface SearchBarProps {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      name: string;
      status: string;
      species: string;
      gender: string;
    }>
  >;
}

const SearchBar = ({ setFilter }: SearchBarProps) => {
  //Create a handleChange for each input
  const handleNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, name: event.target.value }));
  };
  const handleSpecieFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, species: event.target.value }));
  };

  // Create a handleClick for the Autocomplete

  const handleGenderFilter = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setFilter((prev) => ({ ...prev, gender: value || "" }));
  };
  const handleStatusFilter = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setFilter((prev) => ({ ...prev, status: value || "" }));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TextField
        onChange={handleNameFilter}
        id="standard-basic"
        label="Nombre del personaje"
        variant="standard"
      />
      <TextField
        onChange={handleSpecieFilter}
        id="standard-basic"
        label="Especie del personaje"
        variant="standard"
      />
      <Autocomplete
        onChange={handleStatusFilter}
        disablePortal
        id="combo-box-demo"
        options={statusOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Estado" />}
      />

      <Autocomplete
        onChange={handleGenderFilter}
        disablePortal
        id="combo-box-demo"
        options={genderOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Genero" />}
      />
    </Box>
  );
};
const statusOptions = ["Alive", "Dead", "unknown"];
const genderOptions = ["Female", "Male", "Genderless", "unknown"];

export default SearchBar;
