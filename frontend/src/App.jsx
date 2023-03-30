import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Header from "./components/Header";
import Product from "./pages/Product";
import ProductBox from "./components/ProductBox";
import DropdownText from "./components/DropdownText";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
      <Router>
        <div className="w-screen h-screen m-0 px-10 text-center">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:productId" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productBox" element={<ProductBox />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dropdown" element={<DropdownText />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
