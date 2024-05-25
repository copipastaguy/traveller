import { Box, Stack } from "@mui/material";
import { ReactElement } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Tabpanels from "../components/Tabs/Tabs";
import FriendsPostsList from "../components/Posts/PostsList/FriendsPostsList";

const Homepage = (): ReactElement => {
  const tabs = ["Friends", "Discover"];
  return (
    <Box sx={{ padding: "10px" }}>
      <Stack justifyContent="center" direction="row" padding={2}>
        <Searchbar />
      </Stack>

      <FriendsPostsList />

      {/* <Tabpanels tabs={tabs} /> */}
    </Box>
  );
};

export default Homepage;
