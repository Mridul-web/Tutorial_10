import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Mridul Bhattarai</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Hi, I am Mridul Bhattarai</h1>
        <h3>Cybersecurity Student & IT/NOC Intern</h3>
        <p>
          I am building my skills in networking, Linux, cybersecurity,
          programming, and secure web development.
        </p>
        <a className="btn" href="#projects">View My Projects</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a cybersecurity student at Herald College Kathmandu with practical
          experience in network monitoring, VLAN support, access point, switch,
          and router configuration, and IT support.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="cards">
          <div className="card">Networking</div>
          <div className="card">Linux</div>
          <div className="card">Cybersecurity</div>
          <div className="card">HTML / CSS / JavaScript</div>
          <div className="card">React</div>
          <div className="card">GitHub</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Food Ordering and Delivery System</h3>
          <p>
            A web-based food ordering system developed using PHP, MySQL,
            HTML, CSS, and JavaScript for Herald Canteen.
          </p>
        </div>

        <div className="project">
          <h3>CI/CD Portfolio Project</h3>
          <p>
            A React portfolio project built with Vite, GitHub Actions, and Vercel
            deployment.
          </p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: mridul.bhattarai063@egmail.com</p>
        <p>GitHub: github.com/Mridul-web</p>
      </section>
    </div>
  );
}

export default App;