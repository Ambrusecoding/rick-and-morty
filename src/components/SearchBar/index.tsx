import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
    <div>
      <input onChange={handleNameFilter} type="text" />
      <Autocomplete
        onChange={handleStatusFilter}
        disablePortal
        id="combo-box-demo"
        options={statusOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Estado" />}
      />
      <input onChange={handleSpecieFilter} type="text" />
      <Autocomplete
        onChange={handleGenderFilter}
        disablePortal
        id="combo-box-demo"
        options={genderOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Genero" />}
      />
    </div>
  );
};
const statusOptions = ["Alive", "Dead", "unknown"];
const genderOptions = ["Female", "Male", "Genderless", "unknown"];

export default SearchBar;
