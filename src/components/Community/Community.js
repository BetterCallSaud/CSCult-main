import React from "react";
import "./Community.css";
import CommunityDiscussion from "../../image/CommunityDiss.svg";
import DiscordBtn from "../../image/discord-btn.png";

const discordLink = "https://discord.com/invite/8SxAWCPpDM";

function Community() {
  return (
    <div id="community" className="community">
      <div className="community__mainline">
        <h2>Community</h2>
        <p>
          Our community lives in our <b>Discord server</b>. We have a healthy
          culture at CSCult. Everybody is invested in learning and communicating
          with peers.
        </p>
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
            <a href={discordLink} target="_blank"><img src={DiscordBtn} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
