import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Header from "./components/Header";
import Product from "./pages/Product";
import DropdownText from "./components/DropdownText";
import Gallery from "./components/Gallery";
import ProductDescriptionBox from "./components/ProductDescriptionBox";
import ProductSelectBox from "./components/ProductSelectBox";
import Counter from "./components/Counter";
import Cart from "./pages/Cart";
import ProductUpload from "./components/UploadProduct/ProductUpload";
import ImageUpload from "./components/UploadProduct/ImageUpload";
import HamburgerMenu from "./components/HamburgerMenu";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <div className="w-screen h-screen m-0  text-center pt-28">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:productId" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productbox" element={<ProductSelectBox />} />
            <Route path="/descriptionbox" element={<ProductDescriptionBox />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dropdown" element={<DropdownText />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/upload" element={<ProductUpload />} />
            <Route path="/imageupload" element={<ImageUpload />} />
            <Route path="/hamburgermenu" element={<HamburgerMenu />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
