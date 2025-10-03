import Navbar from "./components/Navbar.component";
import Carousel3D, { TripleSlider } from "./components/Carousel.component";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4">
          <Carousel3D />
          <TripleSlider />
        </main>
      </div>
    </>
  );
}

export default App;
