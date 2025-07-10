import React from 'react';
import {
  Container, Navbar, Nav, Row, Col,
  Button, Image, ListGroup, Card
} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.1rem' }}>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Suriya Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tools">Tools</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center justify-content-center g-4">
            <Col xs={12} md={6} className="text-center text-md-start">
              <h1 className="intro-name">Suriya Prabaharan B.E</h1>
              <p>Fresher 2024 Passout</p>
              <div className="availability-badge mb-3">
                <span className="dot me-2"></span> Active to Work
              </div>
              <h4 className="text-muted">Full Stack Developer</h4>
              <p className="objective-text">
                Motivated Entry‑Level Software Engineer with a strong foundation in full‑stack development,
                version control, and software engineering. Passionate about building scalable, high‑performance
                applications, optimizing software performance, and driving innovation. Skilled in Java, Spring Boot,
                SQL, with a keen interest in problem‑solving and technical innovation. Seeking to contribute
                technical expertise and analytical skills to Deloitte’s cutting‑edge projects.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3 justify-content-center justify-content-md-start">
                <a href="https://github.com/suriya3417" target="_blank" rel="noreferrer">
                  <Image src="/images/github9775.jpg" alt="GitHub" rounded className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/suriya-suriya-124535251" target="_blank" rel="noreferrer">
                  <Image src="/images/linkedin-logo-hd-png-3.png" alt="LinkedIn" rounded className="social-icon" />
                </a>
                <a href="/images/suriya_resume.pdf" download>
                  <Button variant="outline-success">
                    <Image src="/images/resume_image.png" alt="Resume" className="me-2" width="25" />
                    Download Resume
                  </Button>
                </a>
              </div>
              <h5>Click to view GitHub, LinkedIn & download resume</h5>
            </Col>

            <Col xs={12} md={6} className="text-center">
              <Image
                src="/images/suriya_graduation.jpeg"
                alt="Suriya Graduation"
                fluid
                rounded
                className="img-fluid hero-img-custom"
                style={{ maxWidth: '70%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

<section id="skills" className="py-5 bg-light">
  <Container>
    <h2 className="text-center mb-4">Skills</h2>
    <Row>
      {[
        { title: "Programming", content: "Java, Python, JavaScript" },
        { title: "Web Development", content: "Spring Boot, React, Node.js" },
        { title: "Database", content: "SQL, PostgreSQL" },
        { title: "Software Development", content: "REST APIs, Microservices" },
        { title: "Version Control", content: "Git, GitHub" },
        { title: "Data Tools", content: "Power BI, Excel" },
      ].map((skill, idx) => (
        <Col key={idx} xs={12} md={6} className={`mb-4 animate-sprinkle delay-${idx}`}>
          <Card className="h-100 shadow text-center">
            <Card.Body>
              <Card.Title className="fw-bold">{skill.title}</Card.Title>
              <Card.Text>{skill.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* Tools */}
      <section id="tools" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Languages & Tools</h2>
          <div className="scroll-container">
            <div className="scroll-track d-flex flex-nowrap justify-content-start">

              {[ 'Html.png','icons8-css-50.png','icons8-java-94.png',
                'icons8-javascript-50.png','icons8-python-94.png','icons8-react-24.png',
                'icons8-postgresql-50 - Copy.png','icons8-intellij-idea-50.png',
                'icons8-visual-studio-48.png','icons8-postman-inc-24.png',
                'icons8-swagger-50.png','icons8-pycharm-50.png' ].map((icon, idx) => (
                <div className="tool-item text-center p-2" key={idx} style={{ minWidth: '80px' }}>
                  <Image src={`/images/${icon}`} alt={icon} width={60} />
                  <p>{icon.split('-')[0].replace('icons8', '')}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center mb-4">My Projects</h2>
          <Row className="g-4 justify-content-center">
            {[ { img: 'Bankling_application.avif', title: 'Banking System (Spring Boot)',
                desc: 'Secure banking backend with JWT auth, OTP verification.', link: 'https://github.com/suriya3417/baking_apllication_java/tree/main/' },
              { img: 'Ecommers.jpg', title: 'E‑Commerce App (Django)',
                desc: 'Full Django e‑commerce platform with Stripe.', link: 'https://github.com/suriya3417/Ecommerce_web_using_django_and_html_css' },
              { img: 'Movie_recommentation.jpg', title: 'Movie Recommendation System',
                desc: 'Full‑stack app with Razorpay integration.', link: 'https://github.com/suriya3417/movie_recommendation' },
              { img: 'Bankling_application.avif', title: 'Banking App (React Frontend)',
                desc: 'React frontend with secure login & OTP.', link: 'https://github.com/suriya3417/BANKING_APPLICATION_REACT' } ].map((p, i) => (
              <Col key={i} xs={12} sm={6} md={5} lg={4}>
                <a href={p.link} target="_blank" rel="noreferrer"
                   className="text-decoration-none text-dark">
                  <Card className="h-100">
                    <Card.Img variant="top" src={`/images/${p.img}`} height="180" style={{ objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text>{p.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Education */}
      <section id="education" className="py-5 bg-light">
        <Container className="text-center">
          <Image src="/images/17-SRM-TRP-Engineering-College-affiliated-to-Anna-University.webp"
                 alt="College" fluid rounded className="mb-4" style={{ maxWidth: '250px' }} />
          <h2>Education</h2>
          <p>
            <strong>SRM TRP Engineering College</strong><br />
            B.E. in Electronics and Communication Engineering<br />
            CGPA: 7.5
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 text-center">
        <Container>
          <p>Email: <a href="mailto:suriyaiece@gmail.com" className="text-light">
            suriyaiece@gmail.com</a></p>
          <p>© 2025 creater Suriya</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
