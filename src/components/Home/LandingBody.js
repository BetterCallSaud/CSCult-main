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
						largest community
					</h3>
					<p>We are EXPLORERS, ARTISTS, VISIONARIES!</p>
				</div>
				<div className="landingbody__button">
					<a target="_blank" href="https://bit.ly/CSCultBrochure">
						<button>
							Learn More
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default LandingBody;
