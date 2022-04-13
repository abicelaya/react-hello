import React from "react";

//include images into your bundle
import perro1 from "../../img/perro1.jpg";
import perro2 from "../../img/perro2.jpg";
import perro3 from "../../img/perro3.jpg";
import perro4 from "../../img/perro4.jpg";


//create your first component
const Home = () => {
	return (
		(
			<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							Navbar
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							class="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div class="navbar-nav">
								<a
									class="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
								<a class="nav-link" href="#">
									Features
								</a>
								<a class="nav-link" href="#">
									Pricing
								</a>
								<a class="nav-link disabled">Disabled</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		),
		(
			<div>
				<h1>A Warm Welcom!</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ducimus assumenda molestiae quam. Ut modi esse autem maxime,
					porro voluptatibus omnis nemo amet a expedita numquam earum
					cupiditate aut quasi saepe!
				</p>
				<button type="button" class="btn btn-primary">
					Call to action!
				</button>
			</div>
		),
		<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
	);
};

export default Home;
