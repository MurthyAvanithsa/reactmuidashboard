import "./App.css";
import AppHeader from "./AppHeader";
import MainWrapper1 from "./MainWrapper1";
import MainWrapper2 from "./MainWrapper2";
import MainWrapper3 from "./MainWrapper3";
import AppBreadCrumb from "./AppBreadCrumb";
import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppHeader />
        <AppBreadCrumb />
        <MainWrapper1 />
        <MainWrapper2 />
        <MainWrapper3 />
      </Container>
    </React.Fragment>
  );
}

export default App;
