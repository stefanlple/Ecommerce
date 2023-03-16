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

function App() {
  return (
    <>
      <Router>
        <div className="w-full max-w-4xl mx-auto px-20 text-center">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:productId" element={<Product />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
