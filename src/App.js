import { createTheme, Stack, ThemeProvider } from "@mui/material";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import AppBar from "./components/Appbar";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import { useState } from "react";
import { Box } from "@mui/system";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <AppBar />
          <Stack direction="row" gap={1}>
            <SideBar mode={mode} setMode={setMode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
