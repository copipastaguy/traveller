import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

type Props = {};

const Saved = (props: Props): ReactElement => {
  const savedPosts = [
    {
      imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      user: "jeff",
    },
    {
      imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      user: "jeff",
    },
    {
      imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      user: "jeff",
    },
    {
      imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      user: "abc",
    },
    {
      imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      user: "abc",
    },
    {
      imageURL: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      user: "abc",
    },
  ];
  return (
    <Grid container>
      {savedPosts.map((savedPost) => (
        <Grid item xs={4} md={3}>
          {/* <Card>
            <CardContent>
              <CardMedia component="img" image={savedPost.imageURL} />
              <Typography>{savedPost.user}</Typography>
            </CardContent>

            <CardActions>
              <IconButton>
                <BookmarkBorderIcon fontSize="small" />
              </IconButton>
            </CardActions>
          </Card> */}

          <Box sx={{ border: "1px solid" }}>
            <Box component="img" src={savedPost.imageURL} height={1} width={1} />
            {/* <Typography>{savedPost.user}</Typography> */}
            {/* <IconButton color="primary">
              <BookmarkBorderIcon fontSize="small" />
            </IconButton> */}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Saved;
