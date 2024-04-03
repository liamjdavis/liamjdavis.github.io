import React from "react";
import Navbar from '../components/Navbar';
import Headshot from '../assets/headshot.jpg';
import AmherstSeal from '../assets/amherst seal.png';
import hp from '../assets/hp.png';
import mammo_bsb from '../assets/amherst baseball.jpg';
import frio from '../assets/Frio.jpg';
import imc from '../assets/imc.jpg';
import cubist from '../assets/cubist.png';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={Headshot}
          alt="Headshot"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '20px',
          }}
        />
      </div>

      <div>
        <h1>Hi, my name is Liam.</h1>
      </div>

      <div className="btn-container">
        <button
          className="btn"
          onClick={() => (window.location.href = "https://www.linkedin.com/in/liam-j-davis/")}
        >
          Linkedin
        </button>

        <button
          className="btn"
          onClick={() => (window.location.href = "https://github.com/liamjdavis")}
        >
          Github
        </button>
      </div>

      <div>
        <p>
          I'm a Mathematics and Computer Science student at Amherst College passionate about the intersection
          between software development and quantitative research. I am also interested in sports analytics
          (particularly baseball, football and soccer) and classical music. A fun fact about me is that I as a trombone player, I placed third at the 2022 Concours International Music Competition
          and was a finalist at the 2023 Southeast Trombone Symposium Competition. I am constantly seeking opportunities to apply myself to new challenges.
          Let's connect and explore opportunities to collaborate and create solutions together.
        </p>
      </div>

      <div style={{ display: 'flex' }}>
        <div className="column left-column" style={{ flex: 1 }}>
          <div>
            <h1>Education</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={AmherstSeal}
                alt="AmherstSeal"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                }}
              />
            </div>

            <div>
              <h3>
                Amherst College <br />
                <p>
                  <i>Bachelors of Arts in Mathematics and Computer Science</i>
                  <br />
                  August 2023 - September 2027
                </p>
              </h3>
            </div>
          </div>

          <div>
            <h1>Industry Training Programs</h1>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={cubist}
                alt="imc"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                }}
              />
            </div>

            <div>
              <h3>
                Cubist Hackathon
                <br />
                <p>
                  April 2024
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={imc}
                alt="imc"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                }}
              />
            </div>

            <div>
              <h3>
                IMC Prosperity Trading Challenge
                <br />
                <p>
                  April 2024
                </p>
              </h3>
            </div>
          </div>

          <div>
            <h1>Skills</h1>
            <div>
              <div style={{ marginBottom: 0 }}>
                <h3>Programming Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>SQL (MySQL, SQLite)</li>
                  <li>Javascript (Node, React)</li>
                  <li>R</li>
                </ul>
                <br />
              </div>

              <div style={{ marginBottom: 0 }}>
                <h3>Tools</h3>
                <ul>
                  <li>Scikit-learn</li>
                  <li>Pandas + Numpy</li>
                  <li>Pytorch</li>
                  <li>Tensorflow + Keras</li>
                  <li>Matplotlib + Seaborn</li>
                </ul>
                <br />
              </div>

              <div>
                <h3>Technologies</h3>
                <ul>
                  <li>Git + Github</li>
                  <li>Jupyter</li>
                  <li>VSCode</li>
                  <li>RStudio</li>
                  <li>PyCharm + Intellij</li>
                  <li>Latex</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="column right-column" style={{ flex: 1 }}>
          <div>
            <h1>Work Experience</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={hp}
                alt="hp"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>
                HP Tech Ventures
                <br />
                <p>
                  <i>Business and VC Analytics Extern</i>
                  <br />
                  May 2024 - July 2024
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={mammo_bsb}
                alt="mammo_bsb"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>
                Amherst College Varsity Baseball
                <br />
                <p>
                  <i>Data and Scouting Analyst</i>
                  <br />
                  February 2024 - Present

                  <br />
                  <br />
                  Collecting and analyzing data on player performance and opposing teams.
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={frio} alt="frio" style={{ width: '100px', height: '100px' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>
                Frio Energy Partners
                <br />
                <p>
                  <i>Software Engineering Intern</i>
                  <br />
                  January 2024 - February 2024

                  <br />
                  <br />
                  Built data pipeline from financial statements to company database.
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;