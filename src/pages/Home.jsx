import React from "react";
import NavBarHome from "../components/NavBarHome";
import SearchFieldHome from "../components/SearchFieldHome";
import { CssBaseline, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <NavBarHome />
      <Container maxWidth="lg">
        <SearchFieldHome />
      </Container>
    </>
  );
};

export default Home;
