import React from "react";
class Fluids extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">
              <p>Fluid Bolus</p>
            </label>
          </div>

          <div
            className="row"
            style={{
              marginBottom: "5px",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            <label style={{ marginLeft: "20px" }} htmlFor="medicine">
              Crystalloid (NS or LR):
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "100px" }}
            />
          </div>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            <label style={{ marginLeft: "20px" }} htmlFor="medicine">
              Colloid/blood:
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "158px" }}
            />
          </div>

          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">
              <p>Maintenance</p>
            </label>
          </div>

          <div
            className="row"
            style={{
              marginBottom: "30px",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            <label style={{ marginLeft: "20px" }} htmlFor="medicine">
              D5 1/2 NS+20 mEq KCL/L:
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "70px" }} />
          </div>
        </form>
      </div>
    );
  }
}

export default Fluids;
