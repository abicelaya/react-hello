import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import perro1 from "../../img/perro1.jpg";
import perro2 from "../../img/perro2.jpg";
import perro3 from "../../img/perro3.jpg";
import perro4 from "../../img/perro4.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row justify-content-md-center">
					<div className="col-12">
						<Jumbotron
							title="Welcome to react"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae quam iste explicabo ea sed similique, veniam consequuntur voluptate eos quia at, nesciunt harum cumque numquam temporibus voluptatibus. Quam, et.
							"
							buttonLabel="Go to the official website"
							buttonURL="https://reactjs.org/"
						/>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col-3">
						<Card
							image={perro1}
							title="Card title"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
							buttonLabel="Go somewhere"
							buttonURL="https://reactjs.org/"
						/>
					</div>
					<div className="col-3">
						<Card
							image={perro2}
							title="Card title"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
							buttonLabel="Go somewhere"
							buttonURL="https://reactjs.org/"
						/>
					</div>
					<div className="col-3">
						<Card
							image={perro3}
							title="Card title"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
							buttonLabel="Go somewhere"
							buttonURL="https://reactjs.org/"
						/>
					</div>
					<div className="col-3">
						<Card
							image={perro4}
							title="Card title"
							text="Some quick example text to build on the card title and make up the bulk of the card's content."
							buttonLabel="Go somewhere"
							buttonURL="https://reactjs.org/"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
