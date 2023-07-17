import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainP from "./pages/MainP";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import General from "./pages/General";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainP />} />
            <Route path="business" element={<Business />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="general" element={<General />} />
            <Route path="health" element={<Health />} />
            <Route path="science" element={<Science />} />
            <Route path="sport" element={<Sport />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
