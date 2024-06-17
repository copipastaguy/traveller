import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { ReactElement, useState } from "react";

type Props = {};

const BottomNavigations = (props: Props): ReactElement => {
  const [page, setPage] = useState("home");
  return (
    <Paper elevation={2} sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
      <BottomNavigation value={page} onChange={(event, newPage) => setPage(newPage)}>
        <BottomNavigationAction href="/" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction value="message" icon={<ChatBubbleIcon />} />
        <BottomNavigationAction href="/saved" value="favorite" icon={<BookmarkIcon />} />
        <BottomNavigationAction value="profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigations;
