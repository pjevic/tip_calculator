/** @format */

import { useState } from "react";

import BillInput from "./components/BillInput";
import Satisfaction from "./components/Satisfaction";
import TotalBill from "./components/TotalBill";
import Reset from "./components/Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [satisfaction1, setSatisfaction1] = useState(0);
  const [satisfaction2, setSatisfaction2] = useState(0);

  const avarageSatisfaction = Math.round((satisfaction1 + satisfaction2) / 2);

  const tip = bill * (avarageSatisfaction / 100);
  const sum = bill + tip;

  return (
    <main className="App">
      <BillInput bill={bill} onSetBill={setBill} />
      <Satisfaction
        id="satisfaction1"
        satisfaction={satisfaction1}
        onSetSatisfaction={setSatisfaction1}
      >
        How did you like the service?
      </Satisfaction>
      <Satisfaction
        id="satisfaction2"
        satisfaction={satisfaction2}
        onSetSatisfaction={setSatisfaction2}
      >
        How did your friend like the service?
      </Satisfaction>

      {bill > 0 && (
        <>
          <TotalBill bill={bill} tip={tip} sum={sum} />
          <Reset
            bill={bill}
            setBill={setBill}
            onSetSatisfaction1={setSatisfaction1}
            onSetSatisfaction2={setSatisfaction2}
          />
        </>
      )}
    </main>
  );
}
