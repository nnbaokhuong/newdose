import React, { Component, useState } from "react";
import "./App.css";
import Display from "./rightRow/Display";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Input from "./leftRow/Input";




function App() {
  // value to hold and function to change weight, year, month, day.
  const [weightApp, setWeightApp] = useState(0);
  const [yearApp, setYearApp] = useState(0);
  const [monthApp, setMonthApp] = useState(0);
  const [dayApp, setDayApp] = useState(0);

  // callbacks function to get input from INput component
  // update on the App component
  const changeWeight = (weightFromInput) => {
    setWeightApp(weightFromInput);
  };
  const changeYear = (yearFromInput) => {
    setYearApp(yearFromInput);
  };
  const changeMonth = (monthFromInput) => {
    setMonthApp(monthFromInput);
  };

  const changeDay = (dayFromInput) => {
    setDayApp(dayFromInput);
  };
  return (
      <div className="background-display">
      <Container>
        <Row>
          <Col sm={4}>
            <Input
              changeWeight={changeWeight}
              changeYear={changeYear}
              changeMonth={changeMonth}
              changeDay={changeDay}
            />
          </Col>
          <Col sm={8}>
            <div className="medicine-display">
              <Display />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
