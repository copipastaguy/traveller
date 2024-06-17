import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import BottomNavigations from "./components/Navigation/BottomNavigations";
import { useTheme } from "./context/DarkTheme";

function App() {
  const { mode } = useTheme();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BottomNavigations />
      </ThemeProvider>
    </>
  );
}

export default App;
