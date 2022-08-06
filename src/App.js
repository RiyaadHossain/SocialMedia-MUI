import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import AppBar from "./components/Appbar";
import RightBar from "./components/RightBar";
import Add from "./components/Add";

function App() {
  return (
    <>
      <AppBar />
      <Stack direction="row" gap={1}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
    </>
  );
}

export default App;
