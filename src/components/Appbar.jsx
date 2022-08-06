import React, { useState } from "react";
import styled from "@emotion/styled";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

const SearchBar = styled("div")({
  backgroundColor: "white",
  padding: "2px 15px",
  borderRadius: "10px",
  width: "40%",
});

const Icons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Be Social
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>
        <Icons>
          <Badge
            sx={{ display: { xs: "none", sm: "block" } }}
            badgeContent={4}
            color="error"
          >
            <Mail />
          </Badge>
          <Badge
            sx={{ display: { xs: "none", sm: "block" } }}
            badgeContent={4}
            color="error"
          >
            <Notifications />
          </Badge>
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: "30px", height: "30px" }}
            onClick={() => setOpen(true)}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Appbar;
