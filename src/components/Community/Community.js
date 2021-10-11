import React from "react";
import "./Community.css";
import CommunityDiscussion from "../../image/CommunityDiss.svg";
import DiscordBtn from "../../image/discord-btn.png";

const discordLink = "https://discord.gg/fjkauFJ3jB";

function Community() {
	return (
		<div id="community" className="community">
			<div className="community__mainline">
				<h2>Community</h2>
				<p>
					The CSCult community is not just like any other community.
					We don't plan events just for the sake of making them
					happen. We believe in hearing out our end consumers, i.e.
					our Community Members and giving them the events they
					require.
				</p>
				<p>
					We avoid going the traditional marketing path that every
					community tries to do. We believe that people would love to
					join our Community by looking at our efforts and believing
					in our vision.
				</p>
				<p>
					What we do believe is in personal, digital and co-branding!
				</p>
				<p>
					Our community outlets consist of{" "}
					<span id="ig">Instagram</span>,{" "}
					<span id="li">LinkedIn</span>, {" "}
					<span id="yt">YouTube</span> and a few{" "}
					<span id="wa">Whatsapp</span> groups. But the heaviest crowd
					is found on our Discord server. Here are some stats of our
					Discord server as of mid-October:
				</p>
				<div className="server-stats">
					<div>
						<h4>SERVER MEMBERS</h4>
						<h1>400+</h1>
					</div>
					<div>
						<h4>DAILY ACTIVE USERS</h4>
						<h1>50+</h1>
					</div>
					<div>
						<h4>PRO & FUN ROLES</h4>
						<h1>26</h1>
					</div>
					<div>
						<h4>SERVER CHANNELS</h4>
						<h1>50+</h1>
					</div>
				</div>
				<p>
					Join our Discord server to get access to resources, event
					announcements, fun activities and everything we have in
					store for our lovely community! 😄
				</p>
				<p>SPOILER ALERT: <i>We do not charge any joining fees and we have all kinds of "experts" from all around India to help you. They are not experts really, but they are the best in what they do!</i></p>
			</div>
			<div className="community__box">
				<div className="community__left">
					<img src={CommunityDiscussion} alt="" />
				</div>
				<div className="community__right">
					<div className="community__rcontent">
						Join the <span>CSCult</span>
						<br /> Discord Server
						<br /> today!
					</div>
					<div className="community__rbutton">
						<a href={discordLink} target="_blank">
							<img src={DiscordBtn} alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Community;
