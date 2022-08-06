import React from "react";
import { Box, Typography } from "@mui/material";

function SideBar() {
  return (
    <Box
      backgroundColor="lightblue"
      flex="2"
      p={1}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Typography variant="h5">SideBar</Typography>
    </Box>
  );
}

export default SideBar;
