import React from 'react';
import './art.css';
import group2 from '../images/group2.png';
import Footer from '../components/Footer/Footer';

const Art = () => {
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <h1>Some<br />
          art pieces O_o</h1>
        <p>
          Besides working as a designer I enjoy my free time creating art which has alot of outlets like photography, doodling, creating concepts from random doodles, dancing, cooking... and a few more. The reason I have added them to my portfolio is because they create a fascinating journey of explorations, insight development and most importantly the art of self-expression.
        </p>
      </div>
      <div style={{ paddingRight: "80px", paddingLeft: "60px", paddingTop: "20px" }}>
        <img src={group2} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Art;
