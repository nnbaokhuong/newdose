import React from "react";
class Pain extends React.Component {
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
              <p>Fentanyl (50 mcg/mL):</p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "53px" }} />
          </div>

          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">
              <p>Morphine (2 mg/mL):</p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "60px" }} />
          </div>
          <div
            className="row"
            style={{
              marginTop: "3px",
              fontWeight: "bold",
              marginLeft: "63px",
            }}
          >
            <label htmlFor="medicine">(4 mg/mL):</label>
            <input type="text" name="medicine" style={{ marginLeft: "60px" }} />
          </div>
        </form>
      </div>
    );
  }
}

export default Pain;
