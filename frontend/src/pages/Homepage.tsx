import { Avatar, Box, Stack } from "@mui/material";
import { ReactElement } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Tabpanels from "../components/Tabs/Tabs";

const Homepage = (): ReactElement => {
  const tabs = ["Friends", "Discover"];
  return (
    <Box sx={{ padding: "10px", backgroundColor: "#e9ecef" }}>
      <Tabpanels tabs={tabs} />
    </Box>
  );
};

export default Homepage;
