import { Box } from "@mui/material";
import { ReactElement } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

import Tabpanels from "../components/Tabs/Tabs";

const Homepage = (): ReactElement => {
  const tabs = ["Friends", "Discover"];
  return (
    <Box sx={{ padding: "2%", backgroundColor: "#e9ecef" }}>
      <NavigationBar />
      <Tabpanels tabs={tabs} />
    </Box>
  );
};

export default Homepage;
