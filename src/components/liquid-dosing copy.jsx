import React from "react";
import App from "../App"
import { PatientContext } from '../PatientContext';


// This class is functional, and returns the correct liquid medicine dosing

function LiquidDosing() {

    // byWeight: dose for the following weights in kg: if weight is higher, take the largest number.
    // If weight is missing, round down?
    // TODO: Ensure above line is correct on rounding.

    // AGE FORMAT: YY.MM. AKA: Newborn = 0, 2 months = 0.2, 1 year 11 months = 1.11, etc.

    const Medicines = [
        { name: 'Epinephrine', unit: "mg", 
            byKg: [{kg:3,dose:0.03},{kg:4,dose:0.04},{kg:5,dose:0.05},{kg:6,dose:0.065},{kg:7,dose:0.065},
            {kg:8,dose:0.085},{kg:9,dose:0.085},{kg:10,dose:0.1},{kg:11,dose:0.1},{kg:12,dose:0.13},{kg:13,dose:0.13},
            {kg:14,dose:0.13},{kg:15,dose:0.17},{kg:16,dose:0.17},{kg:17,dose:0.17},{kg:18,dose:0.17},{kg:19,dose:0.21},
            {kg:20,dose:0.21},{kg:21,dose:0.21},{kg:22,dose:0.21},{kg:23,dose:0.21},{kg:24,dose:0.27},{kg:25,dose:0.27},
            {kg:26,dose:0.27},{kg:27,dose:0.27},{kg:28,dose:0.27},{kg:29,dose:0.27},{kg:30,dose:0.33}],
            byAge: [{age:0,dose:0.03},{age:0.2,dose:0.05}]  
        },
        // TODO: ENSURE GREY IS 0,0,2m
        // TODO: FILL OUT AGE FOR EPINEPHERINE AND ALL DATA FOR BELOW
        { name: 'Amiodarone', unit: "mg" },
        { name: 'Adenosine First', unit: "mg" },
        { name: 'Adenosine Second', unit: "mg" },
        { name: 'Atropine (0.1 mg/mL)', unit: "mg",
            byKg: [{kg:3,dose:0.1},{kg:4,dose:0.1},{kg:5,dose:0.1},{kg:6,dose:0.13},{kg:7,dose:0.13},
            {kg:8,dose:0.17},{kg:9,dose:0.17},{kg:10,dose:0.21},{kg:11,dose:0.21}],
            byAge: [{age:0,dose:0.1},{age:0.2,dose:0.1}]
         }
      ];

      function closest(array, num) {
        var i = 0;
        var minDiff = 1000;
        var ans;
        for (i in array) {
          var m = Math.abs(num - array[i]);
          if (m < minDiff) {
            minDiff = m;
            ans = array[i];
          }
        }
        return ans;
      }

    function calculateDoseKg(nameMedicine,kgInput,ageInput)
    {   
        // Second, get dosing by kg. Round input KG to whole number within range. Console log
        // Third, get dosing by age. Round age to stored range. Console log
        // TODO: ENSURE CORRECT - Should it round, or always round up?
        // Finally, return the dose that is higher


        // First, check if medicine exists
        const result = Medicines.find( ({ name }) => name === nameMedicine );
        //console.log(result)
        if (result === undefined || 'byKg' in result === false || 'byAge' in result === false) { return undefined }
        else{
            // Convert inputs to dosing standards:
            let agesPossible = [0, 0.2, 0.4, 0.8, 1, 2, 4, 6, 8, 10]
            let kgPossible = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,34,36]
            // For weights/ages outside of this range, the frontend may warn the users, but this function simply rounds. 
            let kgClosest = closest(kgPossible, kgInput)
            let ageClosest = closest(agesPossible,ageInput)
            //console.log("KGclosest: ",kgClosest)
            //console.log("AGEclosest: ",ageClosest)

            let doseByKg = (result.byKg.find(obj => obj.kg === kgClosest)).dose;
            let doseByAge = (result.byAge.find(obj => obj.age === ageClosest)).dose;
            let higherDose = (doseByKg > doseByAge) ? doseByKg : doseByAge; // ? is the javascript ternary operator
            console.log("Higher dose: ",higherDose)
            return higherDose //returns dosing for whichever is higher, by age, or by weight.
            // TODO: TESTING ONLY REVERT TO ABOVE
            //const weight = 77
            //return "How do I get data here?!?!"
        }
        
    }

    return (
        
        <div key={Medicines.name}>
            <h3>Age = 0.2, Weight = 3kg</h3>
            {Medicines.map(data => (
                <p key={data.name}>{data.name} {calculateDoseKg(data.name,2,0.3)}</p>
            ))}
        </div>
    )
    
}

export default LiquidDosing;

class Seisure extends React.Component {
    
}