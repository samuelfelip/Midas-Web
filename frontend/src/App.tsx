import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ForexCourse from "./pages/courses/Forex";
import StocksCourse from "./pages/courses/Stocks";
import CryptoCourse from "./pages/courses/Crypto";
import AllCourses from "./pages/courses/AllCourses";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/courses/forex" element={<ForexCourse />} />
        <Route path="/courses/stocks" element={<StocksCourse />} />
        <Route path="/courses/crypto" element={<CryptoCourse />} />
        <Route path="/courses/all" element={<AllCourses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
