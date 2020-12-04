import React from "react";
class Equipment extends React.Component {
  state = {};
  render() {
    // const medStyle = {
    //   marginLeft: "50px",
    //   fontWeight: "bold",
    // };
    return (
      <div>
        <form>
          <div
            className="row"
            style={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            <label htmlFor="medicine">
              <p>*E.T. Tube:</p>
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "167px" }}
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
            <label htmlFor="medicine">
              <p> E.T. Insertion Length:</p>
            </label>
            <input type="text" name="medicine" style={{ marginLeft: "88px" }} />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Stylet:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "198px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">*Suction Catheter:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "108px" }}
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
            <label htmlFor="medicine">Laryngoscope:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "137px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">BVM:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "205px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Oral Airway:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "152px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">*Nasopharyngeal Airway:</label>
            <input type="text" name="medicine" style={{ marginLeft: "52px" }} />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">*LMA:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "196px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Oxygen Mask:</label>
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
              *ETCO<sub>2</sub>:
            </label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "183px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">*Urinary Catheter:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "102px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">*Chest Tube:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "145px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">NG Tube:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "169px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Vascular Access:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "118px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">Intraosseous (IO):</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "106px" }}
            />
          </div>
          <div
            className="row"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            <label htmlFor="medicine">BP Cuff:</label>
            <input
              type="text"
              name="medicine"
              style={{ marginLeft: "175px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Equipment;
