// src/App.js
import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./name.js";
import Price from "./price.js";
import Description from "./description.js";
import Image from "./image.js";

const firstName = "Alex"; // Change this to "" to test the alternate message

function App() {
  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      <Card
        style={{ width: "22rem" }}
        className="shadow-lg p-3 mb-4 bg-white rounded text-center"
      >
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="text-center">
        <h5>Hello, {firstName ? firstName : "there"}!</h5>
        {firstName && (
          <img
            src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
            alt="greeting"
            style={{ width: "100px", marginTop: "10px" }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
