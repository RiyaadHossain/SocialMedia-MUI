import { Box, Fab, Modal, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function Add() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Fab
        onClick={() => setOpen(true)}
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: { xs: 15, md: 30 },
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <AddIcon />
      </Fab>
      <SytledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 500,
            height: 300,
            backgroundColor: "white",
            borderRadius: 5,
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            color={"gray"}
            component="h2"
            textAlign={"center"}
          >
            Create a Post
          </Typography>
        </Box>
      </SytledModal>
    </>
  );
}

export default Add;
