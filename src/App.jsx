import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Exercises from "./pages/Exercises.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Tdee from "./pages/Tdee.jsx";
import NutritionCalculator from "./pages/NutritionCalculator.jsx";
import Auth from "./pages/Auth.jsx";
import Error404 from "./pages/error404.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/tdee" element={<Tdee />} />
        <Route path="/nutrition-calculator" element={<NutritionCalculator />} />
        <Route path="/auth/:method" element={<Auth />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
