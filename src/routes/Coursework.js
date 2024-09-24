import React from 'react';
import Navbar from '../components/Navbar';
import SemesterContainer from '../components/Semester-Container';

const Coursework = () => {
  const fall_2023 = [
    'MATH-211 Multivariable Calculus',
    'COSC-112 Intro Computer Science II',
    'HIST/ASLC-171 History of Dynastic China',
    'FYSE-127 Music and Totalitarianism'
  ];

  const spring_2024 = [
    'MATH-271 Linear Algebra',
    'COSC-211 Data Structures',
    'ECON-111 Intro to Economics',
    'POSC/BLST-229 African American Political Thought'
  ];

  const summer_2024 = [
    'CodePath Software Engineering',
    'AlgoExpert + MLExpert Self-Study',
    'Akuna Capital Options 101',
  ]

  const fall_2024 = [
    'MATH-261 Differential Equations',
    'COSC-241 Artificial Intelligence',
    'COSC-175 Systems 1: Computer Organization and Design',
    "ARCH/ARHA/BLST-125 Urban Africa"
  ]

  return (

    <div>
      <Navbar />
      <h1> Coursework </h1>

      <div>
        <SemesterContainer title="Fall 2024" courses={fall_2024} />
        {}
        <SemesterContainer title="Summer 2024" courses={summer_2024} />
        {}
        <SemesterContainer title="Spring 2024" courses={spring_2024} />
        {}
        <SemesterContainer title="Fall 2023" courses={fall_2023} />
        {}
      </div>
    </div>
  );
};

export default Coursework;
