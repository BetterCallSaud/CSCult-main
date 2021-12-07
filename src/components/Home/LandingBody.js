import React from "react";
import "./LandingBody.css";
import DesertFootage from "../../image/desert-footage.mp4";

function LandingBody() {
	return (
		<div className="landingbody">
			<video src={DesertFootage} autoPlay muted loop />
			<div className="landingbody__div">
				<div className="landingbody__content">
					<h3>
						We are building Indore's
						<br />
						largest Internet community
					</h3>
					<p
						style={{
							fontSize: "3rem",
							fontWeight: "bold",
							padding: "2rem",
							color: "#36c7fb",
							backgroundColor: "white",
						}}
					>
						Exploring the Future
					</p>
					<p style={{ padding: "3rem" }}>
						WE ARE 🎨ARTISTS, 🚀VISIONARIES, 💡INVENTORS,
						🔭EXPLORERS!
					</p>
				</div>
				<div className="landingbody__button">
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1nZHKGMWzzgnBNQ8r0bEAIjg2TwJ2GjKw/view?usp=sharing"
					>
						<button>Learn More</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default LandingBody;
