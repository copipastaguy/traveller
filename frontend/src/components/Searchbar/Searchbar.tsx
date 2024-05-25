import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <Paper sx={{ width: "40%", borderRadius: "20px", display: "flex", alignItems: "center", padding: "5px" }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where are you going?" />

      <IconButton type="button" sx={{ p: "10px", backgroundColor: "orange" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
