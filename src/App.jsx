import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Crafter from "./pages/Crafter/Crafter";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/crafter" element={<Crafter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
