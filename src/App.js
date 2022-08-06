import { AppBar, Box } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <AppBar />
      <Box>
        <SideBar />
        <Feed />
        <RightBar />
      </Box>
    </Box>
  );
}

export default App;
