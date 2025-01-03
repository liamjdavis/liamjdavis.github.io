import React from "react";
import Navbar from '../components/Navbar';
import Headshot from '../assets/headshot.jpg';
import AmherstSeal from '../assets/amherst seal.png';
import hp from '../assets/hp.png';
import mammo_bsb from '../assets/amherst baseball.jpg';
import frio from '../assets/Frio.jpg';
import imc from '../assets/imc.jpg';
import cubist from '../assets/cubist systematic.png';
import codepath from '../assets/code path.jpg';
import goldman from '../assets/goldman sachs.png';
import i2i from '../assets/i2i.png';
import headstarter from '../assets/headstarter.png';
import akuna from '../assets/Akuna Capital.png';
import quantclub from '../assets/quant club.png';

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
          between software development and quantitative research. I have computer science experience in full stack
          and AI engineering, AI research, and quantitative trading. I am currently researching Automated Reasoning with
          Professor Andrew Wu, leading Amherst College's Quant Club as Vice President, and working on the engineering team of Ideas 2 Innovation,
          Amherst College's first student-run startup incubator. Outside of academics, I am interested in sports analytics, specifically baseball, soccer and football.
          I am always looking for new challenges to take on, so feel free to reach out about anything regarding AI research and engineering, quantitative trading, or sports analytics.
          I am always open to email exchanges at <i>ljdavis27@amherst.edu</i> or <i>davisliam123@gmail.com</i>.
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
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={codepath}
                alt="codepath"
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
                CodePath <br />
                <p>
                  <i>Certificate in Software Engineering</i>
                  <br />
                  June 2024 - September 2024
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={akuna}
                alt="akuna"
                style={{
                  width: '250px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                }}
              />
            </div>

            <div>
              <h3>
                Akuna Capital <br />
                <p>
                  <i>Options 101</i>
                  <br />
                  July 2024
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
                  <i>April 2024</i>
                  <br /> 
                  <br />
                  Won 2nd Place Prize
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
                IMC Prosperity 2 Trading Challenge
                <br />
                <p>
                  April 2024
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={goldman}
                alt="goldman"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom: '20px',
                }}
              />
            </div>

            <div>
              <h3>
                Goldman Sachs Virtual Insights Fellow
                <br />
                <p>
                  May 2024 - June 2024
                </p>
              </h3>
            </div>
          </div>

          <div>
            <h1>Skills</h1>
            <div>
              <div>
                <h3 style={{ marginBottom: '0px' }}> Programming Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Javascript (Node, React, Next)</li>
                  <li>Java</li>            
                  <li>SQL (MySQL, SQLite)</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>

              <br></br>

              <div>
                <h3 style={{ marginBottom: '0px' }}>Tools</h3>
                <ul>
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Django</li>
                  <li>Databases: Firebase, PostgreSQL</li>
                  <li>LLM Tools: Llama 3/3.1, OpenAI API, Huggingface, Microsoft Phi</li>
                  <li>APIs: Google Maps API, OpenAI API</li>
                  <li>Scikit-learn</li>
                  <li>Keras</li>
                  <li>Matplotlib + Seaborn</li>
                  <li>Numpy</li>
                  <li>Pandas</li>
                  <li>React Native</li>
                  <li>Cloudflare</li>
                  <li>Docker</li>
                  <li>Pinecone</li>
                </ul>
              </div>

              <br></br>

              <div>
                <h3 style={{ marginBottom: '0px' }}>Technologies</h3>
                <ul>
                  <li>Git + Github</li>
                  <li>Jupyter</li>
                  <li>VSCode</li>
                  <li>PyCharm + Intellij</li>
                  <li>Android Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="column right-column" style={{ flex: 1 }}>
          <div>
            <h1>Experience</h1>

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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>
                IDEAS Lab
                <br />
                <p>
                  <i>Research Engineer</i>
                  <br />
                  January 2025 - Present
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={i2i}
                alt="i2i"
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
                Ideas 2 Innovation
                <br />
                <p>
                  <i>Founding Staff Software Engineer</i>
                  <br />
                  July 2024 - Present
                </p>
              </h3>
            </div>

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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>
                Professor Andrew Wu Research Group
                <br />
                <p>
                  <i>Artificial Intelligence Research Assistant</i>
                  <br />
                  August 2024 - Present
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={quantclub}
                alt="quantclub"
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
                Amherst College Quant Club
                <br />
                <p>
                  <i>Vice President</i>
                  <br />
                  September 2024 - Present
                </p>
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={headstarter}
                alt="headstarter"
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
                Headstarter AI
                <br />
                <p>
                  <i>Software Engineering Fellow</i>
                  <br />
                  July 2024 - August 2024 
                </p>
              </h3>
            </div>

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
                  <br />
                  <br />
                  Calculating and analyzing data on promising startups to
                  further investment due diligence.
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
                  February 2024 - May 2024

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