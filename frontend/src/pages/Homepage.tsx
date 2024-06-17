import { Box } from "@mui/material";
import { ReactElement } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import FriendsPostsList from "../components/Posts/PostsList/FriendsPostsList";

const Homepage = (): ReactElement => {
  return (
    <Box sx={{ padding: "10px" }}>
      <NavigationBar />
      <FriendsPostsList />
    </Box>
  );
};

export default Homepage;
