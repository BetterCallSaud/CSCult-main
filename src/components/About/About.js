import "./About.css";
import NewLogo from "../../image/NewLogo.png";

export default function About() {
	return (
		<div id="about" className="about-container">
			<h1>About</h1><br/>
			<div className="about-divs">
				<div className="about-left">
					<p>
						CSCult is a community of individuals and learners from
						different backgrounds, who want to spend their time <b>
						learning, innovating & working on new ideas.</b>
					</p>
					<br /><br />
					<p>
						If you are a part of CSCult, you spend your time doing
						better things than just studying for interviews and
						exams & doing numerous internships. We have a healthy
						culture of engaging in <b>meaningful discussions </b> and
						helping each other out in <b>achieving coherence and
						harmony</b> in the community.
					</p>
				</div>
				<div className="about-right">
					<img src={NewLogo} />
				</div>
			</div>
		</div>
	);
}
