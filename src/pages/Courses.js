import React, { useState } from 'react';
import './courses.css';
import RegistrationModal from '../components/RegistrationModal';

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
console.log(courses);

const Courses = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openRegistrationModal = () => setIsRegistrationModalOpen(true);
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

  return (
    <>
      <section className="all-courses">
        <h2 className="section-title">Our Courses</h2>

        <div className="courses-container">

          {/* <!-- Course 1 --> */}
          <div className="course-card">
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
          <div className="course-card">
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
          <div className="course-card">
            <img src="https://img.icons8.com/3d-fluency/100/data-configuration.png" alt="Data Icon"/>
            <h3>Data Science & Analytics</h3>
            <p>Become a data-driven decision maker by learning data wrangling, visualisation, statistics, Python, and Power BI.</p>
            <ul>
              <li>Capstone Project</li>
              <li>Excel to Python Transition</li>
              <li>Visualization Mastery</li>
            </ul>
          </div>

          {/* <!-- Add more courses similarly... */}

        </div>

        {/* Registration CTA */}
        <div className="courses-cta">
          <h3>Ready to Get Started?</h3>
          <p>Join our courses and take the first step towards your career goals!</p>
          <button className="cta-button" onClick={openRegistrationModal}>Enroll Now</button>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={closeRegistrationModal} 
      />
    </>
  );
};

export default Courses;
