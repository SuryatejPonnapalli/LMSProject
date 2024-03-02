import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Fees from "./Fees";
import Help from "./Help";
import TimeTable from "./TimeTable";
import Gallery from "./Gallery";

function App() {
  const [extendArrow, setExtendArrow] = useState(false);

  const extendProfile = () => {
    setExtendArrow((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home extendArrow={extendArrow} extendProfile={extendProfile} />
          }
        />
        <Route path="fees" element={<Fees />} />
        <Route path="help" element={<Help />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
