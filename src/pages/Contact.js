import { useState } from 'react';
import axios from 'axios';
import '../styles.css';
import './contact.css';
import RegistrationModal from '../components/RegistrationModal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openRegistrationModal = () => setIsRegistrationModalOpen(true);
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  console.log(openRegistrationModal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://eduweb-backend.onrender.com/api/contact', form);
      alert(res.data.message);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We're here to help! Reach out to us for any queries or doubts.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-form">
            {/* <div className="contact-cta">
              <h3>Interested in Our Courses?</h3>
              <p>Ready to start your learning journey? Click below to register for our courses!</p>
              <button type="button" className="registration-btn" onClick={openRegistrationModal}>
                Register for Courses
              </button>
            </div> */}
            
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

        
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={closeRegistrationModal} 
      />
    </section>
  );
};

export default Contact;
