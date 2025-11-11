import Card from "./components/Card.component";
import Navbar from "./components/Navbar.component";
import Carousel3D from "./components/Carousel.component";
import StatsSection from "./components/StatsSection.component";
import GallerySection from "./components/GallerySection.component";
import MechanicsSection from "./components/MechanicsSection.component";
import ControlsSection from "./components/ControlsSection.component";
import LocationsSection from "./components/LocationsSection.component";
import backgroundImage from "./assets/Fondo_sin_letras.jpeg";
import catacumbasImage from "./assets/locaciones/catacumbas.jpg";
import tronosImage from "./assets/locaciones/tronos.jpg";
import castilloImage from "./assets/locaciones/castillo.jpg";

function App() {
	const name = "Vampyr: Rise of the Night Walkers";
	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					width: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.8)",
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				}}
			>
				<Navbar />
				<div className="px-4 md:px-8 lg:px-0">
					<Carousel3D className="" />

					<section className="max-w-7xl mx-auto py-16">
						<div className="text-center mb-12">
							<h2 className="text-red-100 text-5xl font-bold mb-4 uppercase drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
								{name}
							</h2>
							<div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8"></div>
						</div>
						<div className="flex align-middle justify-center">
							<Card
								title="La Historia"
								description={`Adrián, un cazador convertido en vampiro, despierta atrapado en la celda más profunda del castillo de Drácula. Su aldea fue masacrada por Brauner, un Caballero de Sangre de élite. Entrenado por un misterioso Mentor, Adrián adoptó el vampirismo para obtener el poder necesario y vengar a su familia. Ahora debe escapar, enfrentar a las criaturas de la noche, recolectar armas y ascender hasta la cima de la fortaleza para ejecutar su venganza contra Drácula.`}
								size="extralarge"
							/>
						</div>
					</section>

					<StatsSection />

					<GallerySection />

					<MechanicsSection />

					<ControlsSection />

					<LocationsSection images={[catacumbasImage, tronosImage, castilloImage]} />
				</div>
			</div>
		</>
	);
}

export default App;
