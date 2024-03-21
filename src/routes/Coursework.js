import React from 'react';
import Navbar from '../components/Navbar';
import SemesterContainer from '../components/Semester-Container';

const Coursework = () => {
  const fall_2023 = [
    'MATH-211 Multivariable Calculus',
    'COSC-112 Intro Computer Science II',
    'HIST-171 History of Dynastic China',
    'FYSE-127 Music and Totalitarianism'
  ];

  const spring_2024 = [
    'MATH-271 Linear Algebra',
    'COSC-211 Data Structures',
    'ECON-111 Intro to Economics',
    'BLST-229 African American Political Thought'
  ];

  return (

    <div>
      <Navbar />
      <h1> Coursework </h1>

      <div>
        {}
        <SemesterContainer title="Spring 2024" courses={spring_2024} />
        
        {}
        <SemesterContainer title="Fall 2023" courses={fall_2023} />
      </div>
    </div>
  );
};

export default Coursework;
