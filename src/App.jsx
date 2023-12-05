import "./App.css";
import Carousel from "./components/Carousel";
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
      <div className="App">
        <Carousel item={items} />
      </div>
    </>
  );
}

export default App;
