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
      title: 'Online Learning for ReLU Splitting in DNN Verification',
      description: ['Researching the application of reinforcement learning to deterministic branching strategies on sets of verification problems to improve them on the fly'],
      link:'',
    },
    {
      title: 'RBlocks',
      description: ['Developing a block-based online R-programming IDE for intro statistics students'],
      link: 'https://github.com/dhyeymavani2003/r-blocks'
    },
    {
      title: 'Marabou 3.0',
      description: [
        'Advanced functionality and versatility in line with the developments in Marabou 2.0'
      ],
      link: 'https://github.com/NeuralNetworkVerification/Marabou'
    },
    {
      title: 'Convex Trader',
      description: ['Leading the research on applications of convex optimization in portfolio management with Amherst College Quant Club',
      ],
      link: 'https://github.com/ACquantclub/Applications-of-Convex-Optimization-in-Quantitative-Trading-and-Portfolio-Management'
    }
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