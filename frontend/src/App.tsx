import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import BottomNavigations from "./components/Navigation/BottomNavigations";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BottomNavigations />
    </ThemeProvider>
  );
}

export default App;
