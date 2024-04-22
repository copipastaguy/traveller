import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import Post from "../Post";

type Props = {};

const DiscoverList = (props: Props): ReactElement => {
  const users = [
    {
      username: "steve",
      bio: "love travelling",
    },
    {
      username: "mary",
      bio: "love travelling",
    },
    {
      username: "james",
      bio: "love travelling",
    },
  ];
  return (
    <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
      {users.map((user) => (
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Avatar />
                {/* <CardMedia component="img" src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" /> */}

                <Typography>{user.username}</Typography>

                {/* <Typography variant="body2">{user.bio}</Typography> */}

                <CardActions>
                  <Button variant="contained">Follow</Button>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DiscoverList;
