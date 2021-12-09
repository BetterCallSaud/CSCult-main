import React from "react";
import Header from "../../Home/Header";
import Footer from "../../Footer/Footer";
import "./Team.css";

import EmailSocial from "../../../image/social/email.svg";
import IGSocial from "../../../image/social/instagram.svg";
import LinkedinSocial from "../../../image/social/linkedin.svg";
import TwitterSocial from "../../../image/social/twitter.svg";
import GithubSocial from "../../../image/social/github.svg";

const flexStyle = {
	display: "flex",
	justifyContent: "space-around",
	margin: "5rem 0",
};

export class Team extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		document.body.style.zoom = 0.8;
	}
	render() {
		return (
			<div>
				<Header />
				<div className="team-container">
					<h1 className="heading1">The team that makes it all possible!</h1>
					<div style={flexStyle} className="team-members">
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896782539140784148/mirrself.png" />
							<br />
							<h1>Saud Hashmi</h1>
							<p>Founder</p>
							<div className="team-social">
								<a target="_blank" href="mail:hashmisaud10@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/better.call.saud"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/saud-hashmi"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/Hash_Saud"><img src={TwitterSocial} /></a>
								<a target="_blank" href="https://github.com/SuperbSaud"><img src={GithubSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896782338405589012/29db847e-ada1-4f81-829c-f50295bddd11.png" />
							<br />
							<h1>Purna Jain</h1>
							<p>Branding/Marketing</p>
							<div className="team-social">
								<a target="_blank" href="mail:purnajain1977@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/purnaajain"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/purna-jain-6987a0179"><img src={LinkedinSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/918399450093854770/1611720940962.png" />
							<br />
							<h1>Ananya Lathi</h1>
							<p>Podcast</p>
							<div className="team-social">
								<a target="_blank" href="mail:ananyalathi@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/ananyalathi19"><img src={IGSocial} /></a>
								<a target="_blank" href="https://www.linkedin.com/in/ananya-lathi-826778b3"><img src={LinkedinSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/861992095504924713/896777251549491232/Sujal_Samai.jpg" />
							<br />
							<h1>Sujal Samai</h1>
							<p>Server Moderation</p>
							<div className="team-social">
								<a target="_blank" href="mail:sujalsamai123@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/sujalsamai"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/sujal-samai"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/SujalSamai"><img src={TwitterSocial} /></a>
								<a target="_blank" href="https://github.com/SujalSamai"><img src={GithubSocial} /></a>
							</div>
						</div>
					</div>
					<div style={flexStyle} className="team-members">
						
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/866725616630628352/896768257384665158/Square_Fit_2021811165818975.jpg" />
							<br />
							<h1>Abhikalp Arya</h1>
							<p>Server Moderation</p>
							<div className="team-social">
								<a target="_blank" href="mail:abhikalp.arya@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/abhikalp.arya"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/abhikalp-arya-7179431b9"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/AbhikalpArya"><img src={TwitterSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/879347528368287775/896777113120702534/ME.jpg" />
							<br />
							<h1>Shreytam Goyal</h1>
							<p>Server Moderation</p>
							<div className="team-social">
								<a target="_blank" href="mail:shreytamgoyal@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/shreytamgoyall"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/shreytam-goyal-19595b227"><img src={LinkedinSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/918399482381623316/1619958982808.png"/>
							<br />
							<h1>Manan Soni</h1>
							<p>Podcast</p>
							<div className="team-social">
								<a target="_blank" href="mail:manansoni.soni77@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/manan.soni01"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/manansoni77"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://github.com/manansoni77"><img src={GithubSocial} /></a>
							</div>
						</div>
					</div>
					<div style={flexStyle} className="team-members">
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/901738296915398706/240702570_1265208573940408_7121647706504007991_n.png" />
							<br />
							<h1>Abhilasha Jairath</h1>
							<p>Podcast</p>
							<div className="team-social">
								<a target="_blank" href="mail:abhilashajairath7@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/abhilasha__jairath"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/abhilasha-jairath"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/Abhi_Jairath"><img src={TwitterSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896808766736068608/39c44421-6ffe-4bce-9b69-c5a18ebf3e3c.png" />
							<br />
							<h1>Jaya Garg</h1>
							<p>Branding/Marketing</p>
							<div className="team-social">
								<a target="_blank" href="mail:jayagarg310@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/jaya_garg"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/jaya-garg-baa9501a0"><img src={LinkedinSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896782373117628436/362a04ba-3be1-4156-b0f6-33057fec21e4.png" />
							<br />
							<h1>Sandeep Sharma</h1>
							<p>Branding/Marketing</p>
							<div className="team-social">
								<a target="_blank" href="mail:s16092000@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/lifeofsandeeps"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/lifeofsandeeps"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/lifeofsandeeps"><img src={TwitterSocial} /></a>
							</div>
						</div>
					</div>

					<div style={flexStyle} className="team-members">
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896813275583512686/c7bff1eb-80ea-4c71-b5b3-e79b89ded615.png" />
							<br />
							<h1>Gatha Verma</h1>
							<p>Graphics</p>
							<div className="team-social">
								<a target="_blank" href="mail:gatha986@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/gathaverma"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/gatha-v-bb3403181"><img src={LinkedinSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://media.discordapp.net/attachments/877930443473846324/917375966328815636/muskan.jpg" />
							<br />
							<h1>Muskan Jain</h1>
							<p>Content Creation</p>
							<div className="team-social">
								<a target="_blank" href="mail:muskanjain2113@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/muss2113"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/muskan-jain-a6753a141"><img src={LinkedinSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://media.discordapp.net/attachments/877930443473846324/917377851005730847/poorva.png" />
							<br />
							<h1>Poorva Jain</h1>
							<p>Graphics</p>
							<div className="team-social">
								<a target="_blank" href="mail:poorvajain1208@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://instagram.com/poorva_jain1208"><img src={IGSocial} /></a>
								<a target="_blank" href="https://linkedin.com/in/poorvajain1208"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/poorva_jain1208"><img src={TwitterSocial} /></a>
							</div>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/918398545403469864/ce7cb7e3-e96e-4cd7-8857-30577516a508.png"/>
							<br />
							<h1>Mradul Gupta</h1>
							<p>Web Developer</p>
							<div className="team-social">
								<a target="_blank" href="mail:mradul.gpt1@gmail.com"><img src={EmailSocial} /></a>
								<a target="_blank" href="https://www.linkedin.com/in/mradul-gupta-b5b33221b/"><img src={LinkedinSocial} /></a>
								<a target="_blank" href="https://twitter.com/_Mradul_Gupta"><img src={TwitterSocial} /></a>
								<a target="_blank" href="https://github.com/mradul-gpt"><img src={GithubSocial} /></a>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
