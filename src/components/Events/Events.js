import "./Events.css";
import { Link } from "react-router-dom";

// importing images/assets
import GitHub101Logo from "./assets/git-logo.svg";
import DSAWeeklyLogo from "./assets/dsa-weekly.svg";
import TechioOlympicsLogo from "./assets/techio-olympics-logo.svg";
import WorkspaceIllustration from "./assets/illustration01.svg";

const sectionHeadingStyle = {
	color: "black",
	fontSize: "4rem",
};

export default function EventSection() {
	return (
		<div id="events" className="EventSection section">
			<h1 className="font-g" style={sectionHeadingStyle}>
				Events
			</h1>
			<br />
			<div className="events-images">
				<div>
					<a href="https://www.linkedin.com/events/cryptoworkshop6814090740566646785/">
						<img src="https://cdn.discordapp.com/attachments/866725616630628352/896767903725133824/Untitled_design_2.png" />
					</a>
					<p>
						<h2>Crypto Session</h2>
						This session-cum-workshop was hosted by Saud Hashmi, the Founder of CSCult, in collaboration with MUACM, on the very basics of cryptocurrencies. The session not only covered what cryptocurrencies are, but it discovered the history of currency in general, how traditional fiat money has its own demerits; and how cryptocurrencies can build a more safer and reliable currency system. We also discussed how the power of hashing and nonces are unleashed by cryptocurrencies!
					</p>
				</div>
				<div>
					<a href="https://www.linkedin.com/events/github101byyashsehgal6816642727569084417/">
						<img src="https://cdn.discordapp.com/attachments/866725616630628352/896767911228764180/Untitled_design_1.png" />
					</a>
					<p>
						<h2>GitHub 101</h2>
						One of the most successful sessions organized by CSCult for beginners and open-source developers. Yash Sehgal, the first ever <b>Web Dev {"<Div Head/>"}</b> <i>(see <a target="_blank" style={{ color: '#23b3ab', textDecoration: 'UNDERLINE' }} href="https://bit.ly/CSCultBrochure">CSCult's brochure</a>)</i>, hosted this session, where he taught everyone the basics of Git and GitHub. From creating repositories to managing branches and version control, Yash covered it all. Here's the link to the session:<br/> <a target="_blank" href="https://www.youtube.com/watch?v=AoZSioAWDdo&ab_channel=CSCult"><u style={{ color: 'red' }}>GitHub 101</u></a>
					</p>
				</div>
				<div>
					<a href="https://www.linkedin.com/events/mobiledevelopmentworkshop6828609010107727873/">
						<img src="https://media.discordapp.net/attachments/866725616630628352/896767912659021864/Crypto_Session.png" />
					</a>
					<p>
						<h2>Mobile Development Workshop</h2>
						Another popular event organized by CSCult, where Mihir Pesswani, our first ever <b>AI {"<Div Head/>"}</b>, took a Live Online Workshop on Mobile Development. He explained all kinds of mob dev, life cycles of an app, <u>Flutter v/s React Native</u> and finally, an awesome 30-40 minute live Flutter Sample App coding, where we all coded our own <b>sample portfolio in the Flutter Development IDE</b>.
						<br/>
						Here's the link to the session:<br/> <a target="_blank" href="https://youtu.be/b4J7iKKzaJI"><u style={{ color: 'red' }}>Mobile Development Workshop</u></a>
					</p>
				</div>
			</div>
		</div>
	);
}
