import React from 'react';
import '../components/Semester-Container.css'

const SemesterContainer = ({ title, courses }) => {
  return (
    <div className="container">
      <div className="row">
        <div align="center" className="col">
          <h3>{title}</h3>
          <ul>
            {courses.map((course, index) => (
              <li key={index} style={{ fontSize: '15px', listStyleType: 'none' }}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SemesterContainer;
