import { Container } from "@material-ui/core";
import React from "react";
import Main from "./Main/Main";
import Styles from "./app.module.css";

const App = () => {
  return (
    <div className={Styles.backdrop}>
      <Container maxWidth="lg">
        <Main />
      </Container>
    </div>
  );
};

export default App;
