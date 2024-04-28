import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Title from "./Components/Title";
import Card from "./Components/Card";
import Action from "./Components/Action";
import Data from "./Data.json";

function App() {
  const [personData, setPersonData] = useState(Data);
  // console.log(personData);
  const ShowData = () => {
    setPersonData(Data);
  };
  const RemoveData = () => {
    setPersonData([]);
  };
  return (
    <Container>
      <Title count={personData} />
      <Card person={personData} />
      <Action deleteData={RemoveData} viewData={ShowData} />
    </Container>
  );
}

export default App;
