import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import AppBar from "./components/Appbar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <Box>
      <AppBar />
      <Stack direction="row" gap={1}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
