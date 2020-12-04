import React, { createContext, useState } from "react";
//const { Provider, Consumer } = React.createContext();
export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const [weight, setWeight] = useState(0);
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);

    return (
        <PatientContext.Provider
            value={{
                weight,
                year,
                month,
                day,
                setWeight,
                setYear,
                setMonth,
                setDay
            }}
            >
            {children}
            </PatientContext.Provider>
    );
};
/*
class PatientContextProvider extends Component {
  state = {
    weight: 0
  };

  render() {
    return (
      <Provider
        value={{ 
            weight: this.state.weight, 
            changeWeight: (x) => this.setState({
                weight: x
            })
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { PatientContextProvider, Consumer as PatientContextConsumer };
*/