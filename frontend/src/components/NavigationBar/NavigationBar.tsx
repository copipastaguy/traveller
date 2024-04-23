import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import Searchbar from "../Searchbar/Searchbar";

type Props = {};

const NavigationBar = (props: Props): ReactElement => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-around">
      <Searchbar />

      <Stack direction="row" width="20vw" alignItems="center" justifyContent="space-around">
        <IconButton>
          <HomeIcon />
        </IconButton>

        <IconButton>
          <PeopleIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Divider orientation="vertical" flexItem />

        <Avatar />
        <Typography>username</Typography>
      </Stack>
    </Stack>
  );
};

export default NavigationBar;
