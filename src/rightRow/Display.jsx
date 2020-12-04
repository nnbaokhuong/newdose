import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Seisure from "./med-display/Seisure";
import Overdose from "./med-display/Overdose";
import Icp from "./med-display/Icp";
import Fluids from "./med-display/Fluids";
import Pain from "./med-display/Pain";
import Equipment from "./med-display/Equipment";
import CardiacArrest from "./med-display/CardiacArrest";
import symptomaticBradycardia from "./med-display/SymptomaticBradycardia";
import SymtomaticBradycardia from "./med-display/SymptomaticBradycardia";
class Display extends React.Component {
  state = {};
  btnSwitch = (e) => {
    if (e.target.id === "seisure") {
      this.setState({ compDisplay: <Seisure /> });
    } else if (e.target.id === "overdose") {
      this.setState({ compDisplay: <Overdose /> });
    } else if (e.target.id === "icp") {
      this.setState({ compDisplay: <Icp /> });
    } else if (e.target.id === "fluids") {
      this.setState({ compDisplay: <Fluids /> });
    } else if (e.target.id === "pain") {
      this.setState({ compDisplay: <Pain /> });
    } else if (e.target.id === "equipment") {
      this.setState({ compDisplay: <Equipment /> });
    } else if (e.target.id === "cardiacArrest") {
      this.setState({ compDisplay: <CardiacArrest /> });
    } else if (e.target.id === "symptomaticBradycardia") {
      this.setState({ compDisplay: <SymtomaticBradycardia /> });
    }
  };

  render() {
    const virStyle = {
      height: "100%",
      marginLeft: "0%",
      position: "relative",
    };

    return (
      <div>
        <section>
          <div className="row">
            <div className="col-sm-2" style={{ padding: "0%" }}>
              <button
                id="seisure"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                SEIZURE
              </button>

              <button
                id="overdose"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                OVERDOSE
              </button>

              <button
                id="icp"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                ICP
              </button>

              <button
                id="fluids"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                FLUIDS
              </button>

              <button
                id="pain"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                PAIN
              </button>

              <button
                id="equipment"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                EQUIPMENT
              </button>
              {/* Button for Symptomatic Bradycardia */}
              <button
                id="symptomaticBradycardia"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "4px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                SYPTOMATIC BRADYCARDIA
              </button>
              {/* Button for Cardiac Arrest*/}
              <button
                id="cardiacArrest"
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  width: "120%",
                  border: "3px solid black",
                  marginLeft: "6%",
                }}
                onClick={this.btnSwitch}
              >
                CARDIAC ARREST
              </button>
            </div>

            <div>
              <div style={virStyle}></div>
            </div>

            <div style={{ paddingLeft: "50px" }}>{this.state.compDisplay}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Display;
