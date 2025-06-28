import React from "react";
import "./About.css";
import theme_patt from "../../Assets/about.svg";
import profile_img from "../../Assets/WhatsApp Image 2025-06-27 at 18.58.55_ccab2ce9.jpg";
function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_patt} />
      </div>
      <div className="about-sec">
        <div className="about-left">
          <img src={profile_img} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I’m Nitin Kumwat, a passionate Frontend Developer and a final-year
            B.Tech student in Computer Science and Engineering, with a current
            CGPA/SGPA of approximately 6.8. I enjoy creating responsive and
            user-friendly web interfaces using HTML, CSS, JavaScript, and React.
          </p>
          <p>
            I completed both my Secondary and Senior Secondary education under
            the Rajasthan Board (RBSE), where I built a strong academic
            foundation. Over time, I developed a keen interest in web
            development, especially in building clean and accessible UI.
          </p>
          <p>
            I believe in continuous learning and enjoy turning creative ideas
            into real-world web applications. I’m currently seeking
            opportunities to apply my skills, grow as a developer, and
            contribute to meaningful projects.
          </p>
          </div>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS </p> <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>BootStrap and Tailwind Framework </p>{" "}
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p> JavaScript </p> <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>React Js</p> <hr style={{ width: "50%" }} />
          </div>
        </div>
      </div>
      <div className="about-archivments">
        <div className="about-archivemet">
            <h1>6</h1>
            <p>MONTH OF EXPERIENCE </p>
        </div>
        <hr/>
        <div className="about-archivemet">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-archivemet">
            <h1>15+</h1>
            <p>HAPPY CLTENTS</p>
        </div>

      </div>
    </div>
  );
}

export default About;
