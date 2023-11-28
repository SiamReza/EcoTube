import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/Logo.webp";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  const navItems = (
    <Box sx={{ display: "flex" }}>
      <Button color="inherit" onClick={() => navigate("/about")}>
        About
      </Button>
      <Button color="inherit">Settings</Button>
      <Button color="inherit" variant="outlined">
        Signup
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#111111" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img
            // loading="lazy"
            src={logo}
            alt="EcoTube Logo"
            style={{ maxHeight: "60px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onhandleSubmit={onhandleSubmit}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>{navItems}</Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {["About", "Settings", "Signup"].map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                setDrawerOpen(false);
                navigate(`/${text.toLowerCase()}`);
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
