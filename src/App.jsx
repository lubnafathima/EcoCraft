import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blogs/Blogs";
import Community from "./pages/Community/Community";
import Crafter from "./pages/Crafter/Crafter";
import CrafterPortfolio from "./pages/CrafterPortfolio/CrafterPortfolio";
import Home from "./pages/Home/Home";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/crafter" element={<Crafter />} />
        <Route path="/crafterPortfolio" element={<CrafterPortfolio />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
