import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Input, InputBase, Paper, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import Carousel from "react-material-ui-carousel";

type Props = {
  username: string;
  imageURL: string[];
  caption: string;
  likes: number;
  posted: string;
  location: string;
  saved: number;
};

const Post = ({ username, caption, likes, posted, location, saved, imageURL }: Props): ReactElement => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 700, borderRadius: 5 }}>
      <CardHeader avatar={<Avatar>Me</Avatar>} title={username} subheader={posted}>
        <Button>Follow</Button>
      </CardHeader>

      <CardContent>
        <Stack direction="row" spacing={2}>
          <PlaceIcon />
          {location}
        </Stack>

        <Typography>{caption}</Typography>
      </CardContent>

      <Carousel autoPlay={false} animation="slide">
        {imageURL.map((image, index) => {
          return <Box component="img" src={image} height={400} width="100%" key={index} />;
        })}
      </Carousel>

      <CardContent>
        <Typography fontSize={14}>{caption}</Typography>
      </CardContent>

      <CardActions>
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
          <Box>
            <IconButton>
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption">{likes}</Typography>
          </Box>

          <Box>
            <IconButton>
              <BookmarkBorderIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption">{saved}</Typography>
          </Box>
        </Stack>
      </CardActions>

      <Divider />

      <CardContent>
        <Stack direction="row" spacing={2}>
          <Avatar />
          <Paper variant="outlined" sx={{ width: "80%", padding: "5px", borderRadius: "10px" }}>
            <InputBase sx={{ width: "100%" }} placeholder="Write your comment" />
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Post;
