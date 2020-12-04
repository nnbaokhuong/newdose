import React from "react";
import LiquidDosing from "../../components/liquid-dosing"
import { PatientContext } from '../../PatientContext';


class SymtomaticBradycardia extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>Atropine:</p>
            </label>
            <label htmlFor="medicineDose">
              <a><PatientContext>
                  {(context) => (
                  <a>{LiquidDosing("Atropine (0.1 mg/mL)",context.weight,context.year,context.month)}</a>
                  )}
                </PatientContext></a> 
            </label>
          </div>

          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>Epinephrine 1:1,000 IM:</p>
            </label>
            <label htmlFor="medicineDose">
              <a><PatientContext>
                  {(context) => (
                  <a>{LiquidDosing("Epinephrine",context.weight,context.year,context.month)}</a>
                  )}
                </PatientContext></a> 
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SymtomaticBradycardia;
