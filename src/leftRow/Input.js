import React, { useState, useContext } from "react";
import Timer from "./Timer";
import { PatientContext, PatientProvider } from "../PatientContext";

// need to get data from slider
// so sharing data between children and parent
// by using callback functions.
function Input({ changeWeight, changeYear, changeMonth, changeDay }) {
  const Patient = useContext(PatientContext);

  const [weight, setWeight] = useState(0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    changeWeight(weight);
    Patient.setWeight(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    changeYear(year);
    Patient.setYear(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    changeMonth(month);
    Patient.setMonth(e.target.value);
  };
  const handleDayChange = (e) => {
    setDay(e.target.value);
    changeDay(day);
    Patient.setDay(e.target.value);
  };
  return (
    <div className="input-display">
      <PatientContext>
        {(context) => (
          <React.Fragment>
            <div className="input-component">
              <h2>Input: </h2>
              <label>Weight: </label>
              <br />
              <input
                type="range"
                name="weight"
                min="0"
                max="30"
                value={weight}
                onChange={handleWeightChange}
              />
              <input
                type="number"
                name="weight"
                value={weight}
                onChange={handleWeightChange}
                style={{ width: "15%" }}
              />
              {weight}
              <br />
              <label>Year: </label>
              <br />

              <input
                type="range"
                name="year"
                min="0"
                max="10"
                value={year}
                onChange={handleYearChange}
              />
              <input
                type="number"
                name="year"
                value={year}
                onChange={handleYearChange}
                style={{ width: "15%" }}
              />
              {year}
              <br />
              <label>Month: </label>
              <br />

              <input
                type="range"
                name="year"
                min="0"
                max="11"
                value={month}
                onChange={handleMonthChange}
              />
              <input
                type="number"
                name="month"
                value={month}
                onChange={handleMonthChange}
                style={{ width: "15%" }}
              />
              {month}
              <br />
              <label>Day: </label>
              <br />

              <input
                type="range"
                name="year"
                min="0"
                max="31"
                value={day}
                onChange={handleDayChange}
              />
              <input
                type="number"
                name="day"
                value={day}
                onChange={handleDayChange}
                style={{ width: "15%" }}
              />
              {day}
            </div>

            <div>
              <Timer />
            </div>

            <div className="display-component">
              <h2>You selected: </h2>
              <h3>Children's weight: {weight} kg</h3>
              <h3>
                Children's age: {year} years {month} month {day} day
              </h3>
            </div>
          </React.Fragment>
        )}
      </PatientContext>
    </div>
  );
}

export default Input;
