import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Header from "./components/Header/Header";
import Product from "./pages/Product";
import DropdownText from "./components/Product/DropdownText";
import Gallery from "./components/Product/Gallery";
import ProductDescriptionBox from "./components/Product/ProductDescriptionBox";
import ProductSelectBox from "./components/Product/ProductSelectBox";
import Counter from "./components/Counter";
import Cart from "./pages/Cart";
import ProductUpload from "./components/Admin/UploadProduct/ProductUpload";
import ImageUpload from "./components/Admin/UploadProduct/ImageUpload";
import HamburgerMenu from "./components/Header/HamburgerMenu";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Users from "./pages/Users/Users";
import Admin from "./pages/Admin/Admin";
import EditProduct from "./pages/Admin/EditProduct";

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
            <Route path="/productupload" element={<ProductUpload />} />
            <Route path="/imageupload" element={<ImageUpload />} />
            <Route path="/hamburgermenu" element={<HamburgerMenu />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/users" element={<Users />} />
            <Route path="/editproduct" element={<EditProduct />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
