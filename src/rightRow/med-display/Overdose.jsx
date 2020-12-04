import React from "react";
class Overdose extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>
                D<sub>10</sub>W( 0.1 g/mL):
              </p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "67px" }} />
          </div>

          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>
                D<sub>25</sub>W( 0.25 g/mL):
              </p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "60px" }} />
          </div>
          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">Naloxone(1 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "42px" }} />
          </div>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            <label htmlFor="medicine">(0.4 mg/mL):</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "100px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Flumazexil(0.1 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "20px" }} />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Charcoal (25 g/120mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "20px" }} />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Glucagon(1 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "40px" }} />
          </div>
        </form>
      </div>
    );
  }
}

export default Overdose;
