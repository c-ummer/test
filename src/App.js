import { Routes, Route } from "react-router-dom";
import MainPage from "./routers/MainPage";
import SubPage from "./routers/SubPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sub" element={<SubPage />} />
    </Routes>
  );
}

export default App;
