import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	const styleCard = {
		width: "18rem",
	};
	return (
		<div className="card" style={styleCard}>
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

export default Card;
