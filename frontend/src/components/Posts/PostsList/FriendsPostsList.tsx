import { Grid } from "@mui/material";
import { ReactElement } from "react";

import Post from "../Post";

type Props = {};

const FriendsPostsList = (props: Props): ReactElement => {
  const posts = [
    { username: "alfred", imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl nulla, molestie quis vulputate nec, ullamcorper a dolor.", likes: 1, shares: 1, comments: 1, posted: "2 hours ago", location: "Korea" },
    { username: "licia", imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl nulla, molestie quis vulputate nec, ullamcorper a dolor.", likes: 1, shares: 1, comments: 100, posted: "2 hours ago", location: "Korea" },
    { username: "licia", imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl nulla, molestie quis vulputate nec, ullamcorper a dolor.", likes: 1, shares: 1, comments: 100, posted: "2 hours ago", location: "Korea" },
  ];
  return (
    <Grid container direction="column" spacing={4} justifyContent="center" alignItems="center">
      {posts.map((post) => (
        <Grid item justifyContent="center">
          <Post {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FriendsPostsList;
