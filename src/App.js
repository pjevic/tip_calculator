/** @format */

import BillInput from "./components/BillInput";
import Satisfaction from "./components/Satisfaction";
import TotalBill from "./components/TotalBill";
import Reset from "./components/Reset";

export default function App() {
  return (
    <div className="App">
      <BillInput />
      <Satisfaction></Satisfaction>
      <Satisfaction></Satisfaction>
      <TotalBill />
      <Reset />
    </div>
  );
}
