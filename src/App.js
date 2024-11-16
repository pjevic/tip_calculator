/** @format */

import BillInput from "./components/BillInput";
import Satisfaction from "./components/Satisfaction";
import TotalBill from "./components/TotalBill";
import Reset from "./components/Reset";

export default function App() {
  return (
    <main className="App">
      <BillInput />
      <Satisfaction>How did you like the service?</Satisfaction>
      <Satisfaction>How did your friend like the service?</Satisfaction>
      <TotalBill />
      <Reset />
    </main>
  );
}
