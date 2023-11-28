import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import About from "./pages/About";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000",
        
      },
      primary: {
        main: "#3afd17",
      },
    },
  });

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
