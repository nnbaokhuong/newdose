import React from "react";
import LiquidDosing from "../../components/liquid-dosing"

import { PatientContext } from '../../PatientContext';

class Seisure extends React.Component {

  state = {  };
  render() {
    // const medStyle = {
    //   marginLeft: "50px",
    //   fontWeight: "bold",
    // };
    return (
      <div>
        <form>
          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">
              <p>Lorazepam(2 mg/mL): </p> 
            </label>
            <label htmlFor="medicineDose">
              <a><PatientContext>
                  {(context) => (
                  <a>{LiquidDosing("Epinephrine",context.weight,context.year,context.month)}</a>
                  )}
                </PatientContext></a> 
            </label>
          </div>

          <div
            className="row"
            style={{
              marginBottom: "15px",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            <label htmlFor="medicine">
              <p style={{ marginLeft: "73px" }}> (4 mg/mL):</p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "76px" }} />
          </div>

          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Diazepam(2 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "76px" }} />
          </div>
          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">Phenobarbital(65 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "35px" }} />
          </div>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            <label htmlFor="medicine">(130 mg/mL):</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "132px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Phenytoin(2 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "75px" }} />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Fosphenytoin(2 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "48px" }} />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Levetiracetam (2 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "46px" }} />
          </div>
        </form>
      </div>
    );
  }
}

export default Seisure;
