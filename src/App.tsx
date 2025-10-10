import Card from "./components/Card.component";
import Navbar from "./components/Navbar.component";
import Carousel3D, { TripleSlider } from "./components/Carousel.component";

function App() {
  const name = "Vampyr: Rise of the Night Walkers";
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="px-15">
          <Carousel3D className="" />
          <TripleSlider />
          <div className="flex align-middle justify-center">
            <Card
              title={`¿De que trata ${name}?`}
              description="Un prisionero de origen incierto despierta en un castillo maldito en ruinas, 
                        rodeado de criaturas deformes y guardianes implacables. A medida que explora 
                        sus calabozos y torres, descubre que su destino está ligado al lugar: puede 
                        escapar para recuperar su libertad o desafiar al señor del castillo y reclamar
                        el trono como su nuevo soberano."
              size="extralarge"
            />
          </div>
          <h1 className="text-white text-2xl font-bold mt-10 text-center uppercase">
            Personajes
          </h1>

          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-15">
            <Card
              title="Vampyr"
              description="Cazador de monstruos y MC"
              imageUrl="https://www.sandsaver.com/wp-content/uploads/2016/08/1.png"
              size="large"
              titlecenter
            />
            <Card
              title="El mentor"
              description="Mentor misterioso de Vampyr"
              imageUrl="https://www.sandsaver.com/wp-content/uploads/2016/08/1.png"
              size="large"
              titlecenter
            />
            <Card
              title="Drácula"
              description="Antagonista y el mentor disfrazado"
              imageUrl="https://www.sandsaver.com/wp-content/uploads/2016/08/1.png"
              size="large"
              titlecenter
            />
          </div>
          <h1 className="text-white text-2xl font-bold mt-10 text-center uppercase">
            Mecanicas del juego
          </h1>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-15">
            <Card
              title="Doble salto"
              imageUrl="https://www.sandsaver.com/wp-content/uploads/2016/08/1.png"
              size="medium"
              titlecenter
            />
            <Card
              title="Parry"
              imageUrl="https://www.sandsaver.com/wp-content/uploads/2016/08/1.png"
              size="medium"
              titlecenter
            />
            <Card
              title="Escapar de la muerte"
              imageUrl="https://www.sandsaver.com/wp-content/uploads/2016/08/1.png"
              size="medium"
              titlecenter
            />
          </div>
          <h1 className="text-white text-2xl font-bold mt-10 text-center uppercase">
            Conceptos de arte
          </h1>

          <TripleSlider />
        </div>
      </div>
    </>
  );
}

export default App;
