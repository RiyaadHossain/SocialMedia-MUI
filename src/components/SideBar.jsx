import React from "react";
import {
  Home,
  TextSnippet,
  People,
  Storefront,
  Person,
  AccountBox,
  Settings,
  DarkMode,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

function SideBar({ mode, setMode }) {
  return (
    <Box flex="1" p={1} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed">
        <List>
          {/* ----------- Home Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          {/* ----------- Pages Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <TextSnippet />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
          {/* ----------- People Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          {/* ----------- Marketplace Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
          {/* ----------- Friends Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          {/* ----------- Settings Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          {/* ----------- Profile Link ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          {/* ----------- Switch Theme ----------- */}
          <ListItemButton>
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <Switch
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              defaultUnchecked
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
