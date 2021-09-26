import React from 'react';
import group from '../images/group.jpg';
import Footer from '../components/Footer/Footer';
import image1 from '../images/logo1.jpg';
import image2 from '../images/logo2.jpg';
import image3 from '../images/logo3.jpg';
import image4 from '../images/logo4.jpg';
import image5 from '../images/Rectangle 46.jpg';
import image6 from '../images/Rectangle 47.jpg';
import image7 from '../images/Rectangle 48.jpg';
import image8 from '../images/Rectangle 49.jpg';
import client from '../images/clients.png'
import client1 from '../images/clients1.png'

const About = () => {
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <h1>About<br />
          Me ^_^</h1>
        <p>
          A self-driven and proactive UI/UX designer, who belives that creativity and curiosity go hand in hand. I bring ideas to life and create a compelling and aesthically pleasing story though design. I’ve worked with design studios and companies in the feild of advertising, branding, packaging etc.. & I specialize in visual communication & UI/UX
        </p>
      </div>
      <div style={{ paddingRight: "80px", paddingLeft: "60px", paddingTop: "20px" }}>
        <img src={group} alt="" />
      </div>
      <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <p style={{ fontSize: 64, lineHeight: '100%', color: 'black', paddingBottom: "60px" }}>Skills & Practices</p>
        <div style={{ width: 1450, height: 350, position: 'relative', }}>
          <p style={{ left: 0, top: 0, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Graphic Design</p>
          <p style={{ left: 456, top: 0, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>UI/UX</p>
          <p style={{ left: 86, top: 102, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Advertising & Communication</p>
          <p style={{ left: 746, top: 0, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Research & Strategic Thinking</p>
          <p style={{ left: 726, top: 102, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Wireframing & Prototyping</p>
          <p style={{ width: 292, height: 44, left: 0, top: 204, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Basics of HTML</p>
          <p style={{ left: 224, top: 308, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', }}>3D Modelling (still learning)</p>
          <p style={{ left: 386, top: 204, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Branding & Layouts</p>
          <p style={{ left: 841, top: 308, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Photography & Editing</p>
          <p style={{ left: 841, top: 204, position: 'absolute', fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'rgba(255, 0, 255, 1)', }}>Motion Graphics</p>
        </div>
      </div>
      <div style={{paddingBottom:"2em"}}>
        <p style={{ fontSize: 64, lineHeight: '100%', color: 'black' }}>Design Studios</p>
        <img src={client1} alt="" style={{ padding: "3em" }}></img>
      </div>
      <div style={{paddingBottom:"2em"}}>
        <p style={{ fontSize: 64, lineHeight: '100%', color: 'black'}}>Clients</p>
        <img src={client} alt="" style={{ padding: "3em" }}></img>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;