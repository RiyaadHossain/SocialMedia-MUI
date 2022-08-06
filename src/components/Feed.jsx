import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex="5" p={1}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
}

export default Feed;
