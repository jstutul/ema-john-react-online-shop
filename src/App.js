import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/" element={<Shop />}></Route>
          <Route exact path="/orders" element={<OrderReview />}></Route>
          <Route exact path="/inventory" element={<Inventory />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
