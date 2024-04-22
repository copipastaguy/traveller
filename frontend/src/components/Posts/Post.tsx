import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material";
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
        <Stack direction="row" spacing={2}>
          <PlaceIcon />
          {location}
        </Stack>

        <Typography>{caption}</Typography>
      </CardContent>

      <CardMedia component="img" height="50%" image={imageURL} />

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
    </Card>
  );
};

export default Post;
