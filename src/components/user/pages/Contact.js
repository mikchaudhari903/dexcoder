import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../../firebase/firebaseConfig';
import Header from '../common/Header';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const contactsRef = ref(db, 'contacts');

    push(contactsRef, { name, email, subject, message })
      .then(() => {
        console.log('Contact info saved');
        setSubmitted(true);
        setLoading(false); // Stop loading

        // Reset form fields after submission
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error saving contact info:', error);
        setLoading(false); // Stop loading on error
      });
  };

  return (
    <>
      <Header />
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className={loading ? "loading" : "d-none"}>Loading...</div>
                    <div className="error-message"></div>
                    {submitted && <div className="sent-message">Your message has been sent. Thank you!</div>}

                    <button type="submit" disabled={loading} className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
