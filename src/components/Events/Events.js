import "./Events.css";
import { Link } from "react-router-dom";

// importing images/assets
import GitHub101Logo from "./assets/git-logo.svg";
import DSAWeeklyLogo from "./assets/dsa-weekly.svg";
import TechioOlympicsLogo from "./assets/techio-olympics-logo.svg";
import WorkspaceIllustration from "./assets/illustration01.svg";

const sectionHeadingStyle = {
	color: "White",
	fontSize: "46px",
};

const contentStyle = {
	fontSize: "20px",
	fontFamily: "Montserrat",
	fontWeight: 400,
};

const EventToastStyle = {
	width: "400px",
	display: "flex",
	borderRadius: "100px",
	alignItems: "center",
	color: "white",
	fontWeight: "600",
	gap: "12px",
};

export default function EventSection() {
	return (
		<div id="events" className="EventSection section">
			<h1 className="font-g" style={sectionHeadingStyle}>
				Events
			</h1>
			<p className="content" style={contentStyle}>
				CSCult hosts many events like technical sessions, hackathons,
				bootcamps, discussions, games like Trivia and Pictionary.
			</p>
			<div
				className="description-container"
				style={{
					marginTop: "6em",
					display: "grid",
					gridTemplateColumns: "auto auto",
					alignItems: "center",
				}}
			>
          <div
            className="event-wrapper"
            style={{ display: "grid", rowGap: "16px" }}
          >
            <div
              className="event-toast"
              id="github-101"
              style={EventToastStyle}
            >
              <img src={GitHub101Logo} alt="github-101" />
              <p className="event-title">CSCult GitHub 101</p>
              <p
                className="event-status"
                style={{
                  marginLeft: "auto",
                  marginRight: "12px",
                }}
              >
                DONE
              </p>
            </div>
            <Link to='/dsaweekly'>
              <div
                className="event-toast"
                id="dsa-weekly"
                style={EventToastStyle}
              >
                <img src={DSAWeeklyLogo} alt="dsa-weekly" />
                <p className="event-title" style={{ marginRight: "0" }}>
                  DSA Weekly
                </p>
                <p
                  className="event-status"
                  style={{
                    marginLeft: "auto",
                    marginRight: "12px",
                  }}
                >
                  01.09.2021
                </p>
              </div>
            </Link>
            <div
              className="event-toast"
              id="techio-olympics"
              style={EventToastStyle}
            >
              <img src={TechioOlympicsLogo} alt="techio-olympics" />
              <p className="event-title">Techio Olympics 2021</p>
              <p
                className="event-status"
                style={{
                  marginLeft: "auto",
                  marginRight: "12px",
                }}
              >
                TBD
              </p>
            </div>
				</div>
				<img src={WorkspaceIllustration} alt="demo-image" />
			</div>
		</div>
	);
}
