import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { ReactElement, useState } from "react";

type Props = {};

const Sidebar = (props: Props): ReactElement => {
  const [open, setOpen] = useState(false);

  // render navigation list upon clicking on drawer
  const NavigationItems = (
    <Box sx={{ width: 250 }}>
      <List>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon sx={{ color: "black" }} />
        </IconButton>

        {["Home", "Saved", "Friends", "Profile"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
  );

  return (
    // <Box sx={{ width: "10%" }}>
    //   <IconButton onClick={() => setOpen(true)}>
    //     <MenuIcon />
    //   </IconButton>

    //   <Drawer open={open} onClose={() => setOpen(false)}>
    //     {NavigationItems}
    //   </Drawer>
    // </Box>

    <Stack sx={{ position: "absolute", width: "10vw", height: "100%", border: "1px solid", padding: 2 }}>
      <List>
        {["Home", "Saved", "Friends", "Profile"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Stack>
  );
};

export default Sidebar;
