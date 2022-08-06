import {
  Image,
  PersonAdd,
  VideoCall,
  EmojiEmotions,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
        bgcolor={"background.default"}
        color={"text.primary"}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h5"
            color={"gray"}
            component="h2"
            textAlign={"center"}
            mb={4}
          >
            Create a Post
          </Typography>
          <TextField
            id="standard-multiline-static"
            fullWidth
            multiline
            rows={2}
            label="What's on Your Mind?"
            variant="standard"
          />
          <Stack direction="row" gap={2} marginTop={4} mb={6}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCall color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Button variant="contained" color="primary" fullWidth>
            Post
          </Button>
        </Box>
      </SytledModal>
    </>
  );
}

export default Add;
