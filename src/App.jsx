import "./App.css";
import Carousel from "./components/Carousel";
import Section from "./components/Section";
import NavBar from "./components/NavBar";
import PrimeiraNews from "./components/Section/PrimeiraNews";
import QuemSomos from "./components/Section/QuemSomos";
import LocalEHorarios from "./components/Section/LocalEHorarios";
import Contato from "./components/Section/Contato";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
