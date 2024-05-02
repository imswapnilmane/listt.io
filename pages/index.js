import React, { useState , useRef , useEffect } from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';


export default function Home() {
  // State to control which section is visible
  const [activeSection, setActiveSection] = useState('about');
  const form = useRef();

  const benefits = [
    {
      id: 1,
      title: "Simple Plans",
      description: "Click here to add your own text.",
      icon: '/team_images/kristof.png' // Update path to your icon
    },
    {
      id: 2,
      title: "Personalized Content",
      description: "Click here to add your own text.",
      icon: '/team_images/kristof.png'  // Update path to your icon
    },
    {
      id: 3,
      title: "Community Support",
      description: " Click here to add your own text.",
      icon: '/team_images/kristof.png' // Update path to your icon
    }
  ];


const images = [
  '/mobile_enclosure/mobile_enclosure.jpeg',  // Replace these with your actual image URLs
  '/mobile_enclosure/mobile_enclosure1.jpeg',
  '/mobile_enclosure/mobile_enclosure2.jpeg'
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  }, 3000); // Change image every 3000 milliseconds

  return () => clearInterval(interval);
}, [images.length]);

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_721ttnw', 'template_2wvogc5', form.current, 'zmYEL_3kwGcBcafl1')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message sent unsuccessfully');
        }
      );

    // Optional: Reset the form fields
    e.target.reset();
  };

  return (
    <div className="container">
      <Head>
        <title>appropriate technology solutions for regeneration - listt.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <nav className="nav">
          <a href="#" onClick={() => setActiveSection('about')}>About</a>
          <a href="#" onClick={() => setActiveSection('mobile_enclosure')}>Mobile Enclosure</a>
          <a href="#" onClick={() => setActiveSection('farm_ng')}>Farm Ng</a>
          <a href="#" onClick={() => setActiveSection('clover_mapping')}>Clover Mapping</a>
          <a href="#" onClick={() => setActiveSection('contact')}>Contact</a>
        </nav>
      </header>
      <main>
     
        
        {/* Conditional rendering based on activeSection */}
        {activeSection === 'about' && (
          <section>  
             <h1 className="title">Welcome to <a href="http://www.listt.io/">listt.io</a></h1>
        <p className="description" style={{ textAlign: 'center' }}>appropriate technology solutions for regeneration</p>      

        <div className="mobile-enclosure-container">
              <div className="mobile-enclosure-content">
                <div className="mobile-enclosure-text">
                  <h1 style={{ fontSize: '50px', textAlign: 'center' }}> Introduction </h1>
                  <p>listt.io is a UK-based startup focusing on delivering appropriate and scalable technology
solutions for regenerative agricultural businesses. Its background and core expertise lies in
technology development in an innovation context - around robotics, connected sensors,
machine vision and cloud infrastructure. The core values of the company are built around
serving a customer segment of farming businesses who wish to build sustainable food
systems closer to nature. We want to help these businesses access the appropriate level of
technological innovation to allow them to benefit from the efficiencies and insights they can
deliver. As well as the technologies, listt.io is exploring novel business models, to allow these
technologies to commercialise and reach a wider farming community, offering alternatives
and complements to large agtech providers.</p>
</div>
                <img src='/front_page/listt_logo_with_name.jpg' alt="listt logo" className="listt-logo-image" />
                </div>
                </div>

            <h2 style={{textAlign: "center", fontSize:'50px' , fontWeight: 'bold' }}>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src='/team_images/kristof.png' alt="Kristof" />
            <h3>Kristof</h3>
            <p>Role: Founder</p>
          </div>
          <div className="team-member">
            <img src='/team_images/alan.png' alt="Alan" />
            <h3>Alan</h3>
            <p>Role: Tech Lead</p>
          </div>
          <div className="team-member">
            <img src='/team_images/erwann.png' alt="Erwann" />
            <h3>Erwann</h3>
            <p>Role: Operations Lead</p>
          </div>
          <div className="team-member">
            <img src='/team_images/thomas.png' alt="Thomas" />
            <h3>Thomas</h3>
            <p>Role: Farming Lead</p>
          </div>
          <div className="team-member">
            <img src='/team_images/swapnil.png' alt="Swapnil" />
            <h3>Swapnil</h3>
            <p>Role: Robotics Engineer</p>
          </div>
        </div>
          </section>
        )}
        {activeSection === 'mobile_enclosure' && (
          <section>
    
            <div className="mobile-enclosure-container">
              <div className="mobile-enclosure-content">
                <div className="mobile-enclosure-text">
                  <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Our next Gen AI enabled Mobile Enclosure </h1>
                  <p>Your mobile units bring flexibility to your operations and we’re here to enhance that with our robust enclosure solutions.</p>
                  <p>We provide tailored, durable, and efficient enclosures designed to meet the dynamic needs of mobile operations, whether it's for telecom, environmental monitoring, or portable medical facilities.</p>
                </div>
                <img src='/mobile_enclosure/mobile_enclosure0.jpeg' alt="Mobile Enclosure" className="mobile-enclosure-image" />
                </div>
                </div>
              
      <div className="benefits-container">
        <h2>Benefits of Mob Grazing</h2>
        <div className="benefits-list">
          {benefits.map(benefit => (
            <div key={benefit.id} className="benefit">
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-container">
              <img src={images[currentIndex]} alt="Farm Ng Slide" />
              <div className="indicators">
                {images.map((_, index) => (
                  <span key={index} className={index === currentIndex ? 'dot active' : 'dot'}></span>
                ))}
              </div>
            </div>

          </section>
        )}

        {activeSection === 'farm_ng' && (
          <section>
            <div className="farm-ng-container">
              <div className="farm-ng-content">
                <div className="farm-ng-text">
                  <h1 style={{ fontSize: '50px', textAlign: 'center' }}> Robots in Action </h1>
                  <p>Innovative farming technologies and techniques.</p>
                  <p>Content to be Added </p>
                  <p>Content to be Added </p>
                  <p>Content to be Added </p>
                  <p>Content to be Added </p>
                 </div>
                <img src='/farm_ng/farm_ng0.jpeg' alt="Farm Ng" className="farm-ng-image" />
                </div>
                </div>
          </section>
        )}
        {activeSection === 'clover_mapping' && (
          <section>
            <h2>Clover Mapping</h2>
            <p>Advanced mapping solutions for agricultural needs.</p>
          </section>
        )}
        {activeSection === 'contact' && (
          <section>
            <h2 style={{ fontSize: '50px', textAlign: 'center', margin: '20px 0' }}>Contact Us</h2>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" id="user_name" required />

              <label htmlFor="user_email">Email</label>
              <input type="email" name="user_email" id="user_email" required />

              <label htmlFor="user_organization">Organization</label>
              <input type="text" name="user_organization" id="user_organization" required />

              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>

              <button type="submit">Send</button>
            </form>
          </section>
        )}
      </main>
      <footer>
        <a href="https://github.com/listt-io-regenagtech">
          <img src='/images/github.png' alt="GitHub logo" />
        </a>
        <a href="https://hayeskg.medium.com/">
          <img src='/images/medium.png' alt="Medium logo" />
        </a>
        <a href="https://www.linkedin.com/company/listt-io/">
          <img src='/images/linkedin.png' alt="LinkedIn logo" />
        </a>
        <a href="https://www.kristofhayes.me/">
          <img src='/images/web.png' alt="web logo" />
        </a>
      </footer>
      <style jsx>{`

      
      .container {
        min-height: 100vh; // Full viewport height
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between; // Aligns children to space between
        align-items: center;
      }

        .header {
          width: 100%;
          background-color: olivedrab; /* Same as the image header background */
          padding: 1rem 0;
          text-align: right;
        }

        
        .nav {
            display: flex;
            justify-content: flex-end; /* Align items to the right */
            align-items: center; /* Ensure the alignment is set correctly */
            width: 100%; /* Ensure the nav spans the entire width of the header */
            
            
          }

        .nav a {
          color: white; /* For contrast against the blue background */
          text-decoration: none;
          font-size: 1.2rem;
          padding-left: 50px;
        }

        .nav a:hover {
          text-decoration: underline;
        }

        .nav a:last-child {
          margin-right: 40px; /* Increased right margin for the last link */
        }

        main {
          padding: 10rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .about-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          overflow-y: auto; /* Enable vertical scrolling if content overflows */
        }
        
        .content-section {
          padding: 20px;
        }
        
        .team-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }
        
        .team-member {
          margin: 20px;
          text-align: center;
        }
        
        .team-member img {
          width: 250px; /* Adjust the size as needed */
          height: 250px; /* Adjust the size as needed */
          border-radius: 50%;
          object-fit: cover;
        }
        
        .team-member h3 {
          margin-top: 10px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        footer img {
          margin: 1rem;
          height: 2rem;
          width: auto;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          color: olivedrab;
          text-align: center;
          animation: fadeIn 2s ease-out;
        }
        .description {
          animation: fadeIn 2s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .mobile-enclosure-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
          background-color: #f4f4f4; /* Light grey background */
        }

        .mobile-enclosure-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
        }

        .mobile-enclosure-image {
          width: 50%;
          height: auto;
          border-radius: 10px; /* Optional rounded corners */
        }

        .listt-logo-image {
          width: 50%;
          height: auto;
          border-radius: 10px; /* Optional rounded corners */
        }

        .mobile-enclosure-text {
          width: 50%;
          padding-right: 50px;
        }     
        
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 600px; /* Adjust based on your layout */
          margin: auto;
          overflow: hidden;
        }

        .slider-container img {
          width: 100%;
          display: block; /* Removes bottom space/gap */
        }

        .indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
        }

        .dot {
          height: 10px;
          width: 10px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.active {
          background-color: #717171;
        }

        .farm-ng-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
          background-color: #f4f4f4; /* Light grey background */
        }

        .farm-ng-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
        }

        .farm-ng-image {
          width: 50%;
          height: auto;
          border-radius: 10px; /* Optional rounded corners */
        }

        .farm-ng-text {
          width: 50%;
          padding-right: 50px;
        }


        h1 {
          color: #333; /* Dark grey color for the text */
          margin-bottom: 20px;
        }

        p {
          color: #666; /* Lighter grey for paragraph text */
          line-height: 1.6;
        }

        button {
          padding: 10px 20px;
          background-color: #0056b3; /* Blue background for the button */
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #004494; /* Darker blue on hover */
        }

        @media (max-width: 800px) {
          .mobile-enclosure-content {
            flex-direction: column;
            text-align: center;
          }

          .mobile-enclosure-image,
          .mobile-enclosure-text {
            width: 100%;
          }

          .mobile-enclosure-text {
            padding-left: 0;
            padding-top: 20px;
          }
        }
        .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }

        @media (max-width: 600px) {
          .nav {
            flex-direction: column;
          }
        }

        .benefits-container {
          text-align: center;
          width: 100%;
        }

        .benefits-list {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px;
        }

        .benefit {
          flex-basis: 30%;
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 10px;
        }

        .contact-form {
          max-width: 900px;
          text-align: centre
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 0px;
        }

        .contact-form label {
          margin-bottom: 5px;
          font-weight: bold;
          padding: 0px;
        }

        .contact-form input,
        .contact-form textarea {
          margin-bottom: 20px;
          padding: 16px;
          font-size: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .contact-form button {
          padding: 10px 15px;
          background-color: olivedrab;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .contact-form button:hover {
          background-color: darkolivegreen;
        }



      `}</style>
    </div>
  );
}
