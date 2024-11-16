/** @format */

import BillInput from "./components/BillInput";
import Satisfaction from "./components/Satisfaction";
import TotalBill from "./components/TotalBill";
import Reset from "./components/Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [satisfaction1, setSatisfaction1] = useState(0);
  const [satisfaction2, setSatisfaction2] = useState(0);

  const avarageSatisfaction = Math.round(
    Number(satisfaction1 + satisfaction2) / 2
  );

  const tip = bill * (avarageSatisfaction / 100);
  const sum = bill + tip;

  return (
    <main className="App">
      <BillInput bill={bill} setBill={setBill} />
      <Satisfaction
        satisfaction={satisfaction1}
        setSatisfaction={setSatisfaction1}
      >
        How did you like the service?
      </Satisfaction>
      <Satisfaction
        satisfaction={satisfaction2}
        setSatisfaction={setSatisfaction2}
      >
        How did your friend like the service?
      </Satisfaction>
      <TotalBill bill={bill} tip={tip} sum={sum} />
      <Reset
        bill={bill}
        setBill={setBill}
        setSatisfaction1={setSatisfaction1}
        setSatisfaction2={setSatisfaction2}
      />
    </main>
  );
}
