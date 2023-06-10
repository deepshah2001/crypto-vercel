import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Coins from "./component/Coins";
import CoinDetails from "./component/CoinDetails";
import Exchange from "./component/Exchange";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchange />}/>
        <Route path="/coins/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
