import React from "react";
import { Box, Typography } from "@mui/material";

function RightBar() {
  return (
    <Box
      backgroundColor="lightgreen"
      flex="2"
      p={1}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Typography variant="h5">RightBar</Typography>
    </Box>
  );
}

export default RightBar;
