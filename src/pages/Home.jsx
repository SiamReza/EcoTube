import React from "react";
import NavBarHome from "../components/NavBarHome";
import SearchAreaHome from "../components/SearchFieldHome";
import { CssBaseline, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <NavBarHome />
      <Container maxWidth="lg">
        <SearchAreaHome />
      </Container>
    </>
  );
};

export default Home;
