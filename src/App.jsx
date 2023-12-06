import "./App.css";
import Carousel from "./components/Carousel";
import Section from "./components/Section";
import NavBar from "./components/NavBar";
import PrimeiraNews from "./components/Section/PrimeiraNews";
import QuemSomos from "./components/Section/QuemSomos";
import LocalEHorarios from "./components/Section/LocalEHorarios";
import Contato from "./components/Section/Contato";
const items = [
  {
    url: "https://placehold.co/1500x500/png",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <div className="App">
        <Section />
        <PrimeiraNews />
        <QuemSomos />
        <LocalEHorarios />
        <Contato />
      </div>
    </>
  );
}

export default App;
