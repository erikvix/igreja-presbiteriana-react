import "./App.css";
import Carousel from "./components/Carousel";
import Eventos from "./components/Eventos";
import NavBar from "./components/NavBar";
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
        <Eventos />
      </div>
    </>
  );
}

export default App;
