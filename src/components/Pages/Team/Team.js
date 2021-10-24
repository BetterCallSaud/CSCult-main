import React from "react";
import Header from "../../Home/Header";
import Footer from "../../Footer/Footer";
import "./Team.css";

const flexStyle = {
	display: "flex",
	justifyContent: "space-around",
	margin: "3rem 0",
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
					<h1>The team that makes it all possible!</h1>
					<div style={flexStyle} className="team-members">
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896782539140784148/mirrself.png" />
							<br />
							<h1>Saud Hashmi</h1>
							<p>Founder</p>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896782338405589012/29db847e-ada1-4f81-829c-f50295bddd11.png" />
							<br />
							<h1>Purna Jain</h1>
							<p>Branding/Marketing</p>
						</div>
						<div className="team-member team-member-1">
							<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGH4wr1Il62tw/profile-displayphoto-shrink_200_200/0/1611720940962?e=1639612800&v=beta&t=BMC3WJppKyVvmxG40BjJHt_OAlqPl4SutWZ4y_hHkSI" />
							<br />
							<h1>Ananya Lathi</h1>
							<p>Podcast</p>
						</div>
					</div>
					<div style={flexStyle} className="team-members">
						<div className="team-member team-member-2">
							<img src="https://cdn.discordapp.com/attachments/861992095504924713/896777251549491232/Sujal_Samai.jpg" />
							<br />
							<h1>Sujal Samai</h1>
							<p>Server Moderation</p>
						</div>
						<div className="team-member team-member-2">
							<img src="https://cdn.discordapp.com/attachments/866725616630628352/896768257384665158/Square_Fit_2021811165818975.jpg" />
							<br />
							<h1>Abhikalp Arya</h1>
							<p>Server Moderation</p>
						</div>
						<div className="team-member team-member-2">
							<img src="https://cdn.discordapp.com/attachments/879347528368287775/896777113120702534/ME.jpg" />
							<br />
							<h1>Shreytam Goyal</h1>
							<p>Server Moderation</p>
						</div>
						<div className="team-member team-member-2">
							<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFakwuji0xf0g/profile-displayphoto-shrink_200_200/0/1619958982808?e=1639612800&v=beta&t=bq4jGJYPkQM1_9ErsQ9MgWfKMpZgzKn6y7-kAaKTm2E" />
							<br />
							<h1>Manan Soni</h1>
							<p>Podcast</p>
						</div>
						<div className="team-member team-member-2">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/901738296915398706/240702570_1265208573940408_7121647706504007991_n.png" />
							<br />
							<h1>Abhilasha Jairath</h1>
							<p>Podcast</p>
						</div>
					</div>
					<div style={flexStyle} className="team-members">
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896808766736068608/39c44421-6ffe-4bce-9b69-c5a18ebf3e3c.png" />
							<br />
							<h1>Jaya Garg</h1>
							<p>Branding/Marketing</p>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896782373117628436/362a04ba-3be1-4156-b0f6-33057fec21e4.png" />
							<br />
							<h1>Sandeep Sharma</h1>
							<p>Branding/Marketing</p>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896808764253028392/d9eb2374-a252-4786-8260-77e30847970a.png" />
							<br />
							<h1>Md. Faiz Qureshi</h1>
							<p>Content Creation</p>
						</div>
						<div className="team-member team-member-1">
							<img src="https://cdn.discordapp.com/attachments/877930443473846324/896813275583512686/c7bff1eb-80ea-4c71-b5b3-e79b89ded615.png" />
							<br />
							<h1>Gatha Verma</h1>
							<p>Graphics</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
