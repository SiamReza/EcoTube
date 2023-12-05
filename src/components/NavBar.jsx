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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../assets/Logo.webp";
import logoOnly from "../assets/LogoOnly.webp";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [searchBarOpen, setSearchBarOpen] = useState(false);


  const handleSearchIconClick = () => {
    setSearchBarOpen(!searchBarOpen);
  };

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
      <Button color="inherit" sx={{color: "primary.main"}} onClick={() => navigate("/about")}>
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
          
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" }, color: "primary.main" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <img
          src={isMobile ? logoOnly : logo}
          alt="EcoTube Logo"
          style={{ maxHeight: "30px", marginRight: "10px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        {isMobile && (
          <IconButton
            sx={{color: "primary.main"}}
            aria-label="search"
            onClick={handleSearchIconClick}
          >
            <SearchIcon  />
          </IconButton>
        )}

        <Box
          sx={{
            flexGrow: 1,
            display: isMobile && !searchBarOpen ? "none" : "flex",
            alignItems: "center",
          }}
        >
          {isMobile && searchBarOpen}

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onhandleSubmit={onhandleSubmit}
          />
        </Box>

        {!isMobile && navItems}
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
