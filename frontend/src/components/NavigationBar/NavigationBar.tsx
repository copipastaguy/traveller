import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Stack, Switch } from "@mui/material";
import { ReactElement } from "react";
import { useTheme } from "../../context/DarkTheme";
import Searchbar from "../Searchbar/Searchbar";

type Props = {};

const NavigationBar = (props: Props): ReactElement => {
  const { mode, toggleMode } = useTheme();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" pb={3}>
      <Searchbar />
      {mode === "dark" ? (
        <IconButton onClick={toggleMode} color="primary">
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton onClick={toggleMode} color="primary">
          <DarkModeIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default NavigationBar;
