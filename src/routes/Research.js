import React from 'react';
import Navbar from '../components/Navbar';

const ResearchCard = ({ research }) => (
  <div>
    <h3 style={{marginBottom:10}}>{research.title}</h3>
    <ul style={{listStyleType:'dash', marginBottom:10}}>
      {research.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className='btn'>
        <a href={research.link}>Link</a>
      </button>
    </div>
  </div>
);

const Research = () => {
  const researchExperiences = [
    {
      title: 'Marabou 3.0',
      description: ['- Engineering Improvements in Robustness for Marabou, a Neural Network Verification Framework',
                    '- Updated Marabou to integrate Gurobi version 11',
                    '- Advanced functionality and versatility in line with the developments in Marabou 2.0'
      ],
      link: 'https://github.com/NeuralNetworkVerification/Marabou'
    },
  ];

  return (
    <div>
      <Navbar/>
      <div>
        <h1>Research</h1>
        {researchExperiences.map((research, index) => (
          <ResearchCard key={index} research={research} />
        ))}
      </div>
    </div>
  );
};

export default Research;