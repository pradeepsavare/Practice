import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import UseEffect from "./UseEffect/UseEffect";
import UseRef from "./UseRef/UseRef";
import UseMemo from "./UseMemo/UseMemo";
import UseCallback from "./UseCallback/UseCallback";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseContext from "./UseContext/UseContext";
import UseReducer from "./UseReducer/UseReducer";
import Counter from "./UseReducer/Counter"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UseEffect />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/uselayout" element={<UseLayoutEffect />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
