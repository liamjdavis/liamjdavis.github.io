import React from 'react';
import Navbar from '../components/Navbar';

const ProjectCard = ({ project }) => (
  <div>
    <h3 style={{marginBottom:10}}>{project.name}</h3>
    <ul style={{listStyleType:'dash', marginBottom:10}}>
      {project.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className='btn'>
        <a href={project.githubLink}>Github Link</a>
      </button>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      name:'Vendor Map',
      description: ['Won 2nd Prize at 2024 Cubist Hackathon organized by Cubist Systematic Strategies',
      'Developed web app that optimized food vendor locations with streaming foot traffic data',
      'Leveraged historical transit flows to predict population density',
      'Applied game theory principles to encourage collaborative decision-making among vendors'],
      githubLink: 'https://github.com/liamjdavis/P72-Hackathon'
    },
    {
      name: 'Stock Forecasters',
      description: ['- Built a LSTM network, GRU network and CNN to forecast stock prices in jupyter notebooks',
                    '- Visualized forecasts with Matplotlib and Seaborn',
                    '- Deployed interactive models on the web using Binder'],
      githubLink: 'https://github.com/liamjdavis/Stock-Forecasters'
    },
    {
      name: 'Credit Card Customer Segmentation',
      description:['- Segmented credit card customers to optimize market strategies',
                    '- Implemented K Means Clustering from scratch with Python',
                    '- Applied algorithm to dataset with 5 features',
                    '- Clustered customers into 3 groups, visualized clusters with seaborn'
        ],
      githubLink: 'https://github.com/liamjdavis/Credit-Card-Customer-Segmentation'
    },
    {
      name: 'Galaxy Simulator',
      description: ['- Built a Java-based galaxy simulator',
                    '- Implemented Barnes-Hut Algorithm for efficient performance',
                    '- Created user controls to spawn new stars and black holes, and time manipulation',
                    '- Capable of simulating galaxies with hundreds of thousands of stars with minimal lag',
        ],
      githubLink: 'https://github.com/liamjdavis/112-Final-Project'
    }
  ];

  return (
    <div>
      <Navbar/>
      <div>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
