import React from "react";
import { characters } from "../../api/characters";
import Navbar from "../../components/Navbar";
import { CardComponent } from "../../components/Card/Card";
import { Container } from "@mui/material";

const HomePage = () => {
  React.useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <CardComponent />
      </Container>
    </>
  );
};
export default HomePage;
