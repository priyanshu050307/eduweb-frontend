import React from 'react';
import './courses.css';

const courses = [
  {
    title: 'JEE Advanced & Mains',
    desc: 'Structured modules, test series, and mentorship by IITians.',
  },
  {
    title: 'NEET UG',
    desc: 'Concept clarity and rigorous practice to ace medical entrances.',
  },
  {
    title: 'CUET (All Streams)',
    desc: 'Targeted preparation for Science, Commerce, and Humanities.',
  },
];

const Courses = () => (
  <section class="all-courses">
  <h2 class="section-title">Our Courses</h2>

  <div class="courses-container">

    {/* <!-- Course 1 --> */}
    <div class="course-card">
      <img src="https://img.icons8.com/3d-fluency/100/code.png" alt="Web Dev Icon"/>
      <h3>Full Stack Web Development</h3>
      <p>Master HTML, CSS, JavaScript, React, Node.js, MongoDB and more in our full stack program. Build real-world projects and deploy apps.</p>
      <ul>
        <li>Live coding sessions</li>
        <li>Project-based learning</li>
        <li>100% Placement Support</li>
      </ul>
    </div>

    {/* <!-- Course 2 --> */}
    <div class="course-card">
      <img src="https://img.icons8.com/3d-fluency/100/artificial-intelligence.png" alt="AI Icon"/>
      <h3>Artificial Intelligence & Machine Learning</h3>
      <p>Understand algorithms, neural networks, and model deployment using Python, TensorFlow, and real-time data sets.</p>
      <ul>
        <li>Hands-on ML models</li>
        <li>AI tools & APIs</li>
        <li>Real-world case studies</li>
      </ul>
    </div>

    {/* <!-- Course 3 --> */}
    <div class="course-card">
      <img src="https://img.icons8.com/3d-fluency/100/data-configuration.png" alt="Data Icon"/>
      <h3>Data Science & Analytics</h3>
      <p>Become a data-driven decision maker by learning data wrangling, visualisation, statistics, Python, and Power BI.</p>
      <ul>
        <li>Capstone Project</li>
        <li>Excel to Python Transition</li>
        <li>Visualization Mastery</li>
      </ul>
    </div>

    {/* <!-- Add more courses similarly... --> */}

  </div>
</section>

);

export default Courses;
