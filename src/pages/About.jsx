import bgImage from "/assets/background.jpg";
import portrait from "/assets/portrait.jpg";

const About = () => {
  return (
    <main>
      <section
        className="section intro"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${bgImage})`,
        }}
      >
        <div className="intro">
          <h3 className="intro__name">
            Hi! I&apos;m <span>Hidayat</span>
          </h3>
          <h2 className="intro__job-title">
            I develop the front-end of websites.
          </h2>
        </div>
      </section>
      <div className="divider"></div>
      <section className="section">
        <h2 className="section__title">About Me</h2>
        <img className="about__img" src={portrait} alt="Picture of Hidayat" />
        <p className="about__description">
          <span>
            Hello there! My name is Muhammad Hidayat Bin Salaman. I am an
            aspiring software developer. I am passionate about continuous
            learning and eager to try and tackle new challenges. I am currently
            awaiting for my computer science degree majoring in digital systems
            security from University of Wollongong.
          </span>
          <span>
            During my free time, I enjoy playing billiards, video games, and
            working out to keep myself fit and healthy!
          </span>
        </p>
      </section>
      <div className="divider"></div>
      <section className="section">
        <h2 className="section__title">My Skills</h2>
        <p className="skills-description">
          These are some languages and technologies I have worked with.
        </p>
        <div className="skills-wrapper">
          <p className="skills">React</p>
          <p className="skills">JavaScript</p>
          <p className="skills">HTML</p>
          <p className="skills">CSS</p>
          <p className="skills">Python</p>
          <p className="skills">Express JS</p>
          <p className="skills">Node JS</p>
          <p className="skills">MySQL</p>
          <p className="skills">MongoDB</p>
          <p className="skills">GitHub</p>
        </div>
      </section>
    </main>
  );
};

export default About;
