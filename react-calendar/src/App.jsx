import { Route, Routes } from "react-router-dom";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
