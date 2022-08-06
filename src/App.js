import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import AppBar from "./components/Appbar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <AppBar />
      <Stack direction="row" gap={1}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </>
  );
}

export default App;
