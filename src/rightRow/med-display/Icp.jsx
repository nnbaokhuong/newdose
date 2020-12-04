import React from "react";
class Icp extends React.Component {
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
              <p>3% Saline:</p>
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "177px" }}
            />
          </div>

          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>Mannitol (20% 0.2 g/mL):</p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "60px" }} />
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
              style={{ marginLeft: "152px" }}
            />
          </div>
          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">Furosemide(10 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "67px" }} />
          </div>
        </form>
      </div>
    );
  }
}

export default Icp;
