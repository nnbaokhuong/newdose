import React from "react";
class CardiacArrest extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>Amiodarone:</p>
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "135px" }}
            />
          </div>

          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">
              <p>Epinephrine 1:1,000 IM:</p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "53px" }} />
          </div>

          <div className="row" style={{ fontWeight: "bold" }}>
            <label htmlFor="medicine">
              <p>Lidocaine:</p>
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "155px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CardiacArrest;
