import { Grid } from "@mui/material";
import { ReactElement } from "react";

import Post from "../Post";

type Props = {};

const FriendsPostsList = (props: Props): ReactElement => {
  const posts = [
    { username: "alfred", imageURL: ["https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg", "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"], caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl nulla, molestie quis vulputate nec, ullamcorper a dolor.", likes: 1, posted: "12 May 2024 1:29am", location: "Korea", saved: 10 },
    { username: "licia", imageURL: ["https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"], caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl nulla, molestie quis vulputate nec, ullamcorper a dolor.", likes: 1, posted: "12 May 2024 1:29am", location: "Korea", saved: 10 },
  ];
  return (
    <Grid container direction="column" spacing={4} justifyContent="center" alignItems="center" pb={10}>
      {posts.map((post) => (
        <Grid item justifyContent="center">
          <Post {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FriendsPostsList;
