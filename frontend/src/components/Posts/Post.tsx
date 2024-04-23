import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Input, InputBase, Paper, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

type Props = {
  username: string;
  imageURL: string;
  caption: string;
  likes: number;
  comments?: number;
  posted: string;
  location: string;
};

const Post = ({ username, imageURL, caption, likes, comments, posted, location }: Props): ReactElement => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 700, borderRadius: 5 }}>
      <CardHeader avatar={<Avatar>Me</Avatar>} title={username} subheader={posted}>
        <Button>Follow</Button>
      </CardHeader>

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <PlaceIcon />
            {location}
          </Stack>

          <Typography>{caption}</Typography>

          <CardMedia component="img" height="50%" image={imageURL} sx={{ borderRadius: "10px" }} />
        </Stack>
      </CardContent>

      <CardActions>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton>
            <FavoriteIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption">{likes}</Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton>
            <ChatIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption">{comments}</Typography>
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
