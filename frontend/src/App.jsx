import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Collection from "./pages/Collection";
import Header from "./components/Header/Header";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductUpload from "./components/Admin/UploadProduct/ProductUpload";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import EditProduct from "./pages/EditProduct";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <div className="m-0 h-screen w-screen  pt-28 text-center">
          <Header />
          <Routes>
            <Route path="/" element={<Collection /> /* <Home /> */} />
            <Route path="/collection" element={<Collection /> /* <Home /> */} />
            <Route
              path="/collection/:category"
              element={<Collection /> /* <Home /> */}
            />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/search" element={<Search />} />

            {/* Login & Register */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />

            {/* Admin */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productupload" element={<ProductUpload />} />
            <Route path="/:productId" element={<Product />} />
            <Route path="/editproduct" element={<EditProduct />} />

            {/* Users */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
