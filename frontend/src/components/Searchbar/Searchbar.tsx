import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <Paper sx={{ width: "50%", borderRadius: "10px", display: "flex", alignItems: "center" }}>
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for a place or friend ... " />
    </Paper>
  );
};

export default Searchbar;
