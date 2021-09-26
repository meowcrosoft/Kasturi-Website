import React from 'react';
import './index.css';
import './az-artful.webflow.d841c3435.css'
import nutrikart from '../images/Home Page Nutrikart.png'
import balaji from '../images/Home Page Balaji Snacks.png'
import Footer from '../components/Footer/Footer'
import brands from '../images/Home Page Brands in Q.png'
import zagga from '../images/Home Page Zagga.png'

const Home = () => {
  return (
    <div style={{cursor:"pointer"}}>
      <div>
        <h1 className="h1">
          hello<br />
          I'm Kasturi
        </h1>
      </div>
      <div className="w-layout-grid hero-grid">
        <div
          id="w-node-cd46b381-382c-db0e-05b8-21bf07ccbceb-9daebe8c"
          className="hero-left-description-content"
        >
          <h5
            data-w-id="cd46b381-382c-db0e-05b8-21bf07ccbcec"
            className="port"
          // style={{ display: "block", fontSize: "50px", fontWeight: "bold", paddingLeft: "20px" }}
          >
            My<br></br>
            Portfolio<br></br>
            Showcase
          </h5>
        </div>
        <div
          id="w-node-cd46b381-382c-db0e-05b8-21bf07ccbcef-9daebe8c"
          className="hero-links-grid"
        >
          <div className="content">
            <a
              data-w-id="cd46b381-382c-db0e-05b8-21bf07ccbcf0"
              href="mailto:kolikasturi07@gmail.com"
              className="link w-inline-block"
              style={{ textDecoration: 'none' }}
            ><div className="white-text" >
                <span className="mail1">kolikasturi07</span>
                <span className="mail2">@gmail.com</span>
              </div>
              <div
                className="link-underline white"
              ></div
              ></a>
          </div>
        </div>
      </div>
      <div class="section" style={{cursor:"pointer"}}>
        <div class="container">
          <div class="w-layout-grid grid-6-columns">
            <div
              id="w-node-_741da83a-78d3-18d9-8e12-bc788baec05e-9daebe8c"
              class="content"
            >
              <div class="heading-container">
                <div class="perspective">
                  <div
                    data-w-id="b239b8e5-e32b-992b-3449-9b54c8f88aed"
                    class="perspective-load1-on-view"
                  >
                    <h3 class="no-margin-bottom">The work I did, and</h3>
                  </div>
                  <div
                    class="perspective-load2-on-view"
                  >
                    <h3 class="no-margin-top">the people I helped.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-dyn-list">
            <div role="list" class="project-collection-list w-dyn-items">
              <div role="listitem" class="project-collection-item w-dyn-item">
                <a
                  href="/tata"
                  class="project-item w-inline-block"
                ><div class="project-item-image-holder">
                    <img
                      src={nutrikart}
                      alt=""
                      class="project-item-image"
                    />
                    <div
                      class="project-item-image-overlay"
                    ></div>
                  </div>
                  <div class="project-item-content">
                    <div class="perspective">
                      <div
                        class="perspective-load1-on-view"
                      >
                        <h3 class="project-item-title">Tata Nutrikart</h3>
                        <div>
                          <p style={{ paddingLeft: "0", color: "#A0A0A0" }}>UI/UX & ADVERTISING</p>
                        </div>
                      </div>
                    </div>
                    <div class="project-item-arrow-holder">
                      <img
                        src="https://assets.website-files.com/60586ee6b54d92a3bcaebe89/6059ee1ef0159c167c9f0385_Link-Arrow.svg"
                        alt=""
                        class="project-item-arrow"
                      />
                    </div></div
                  ></a>
              </div>
              <div role="listitem" class="project-collection-item w-dyn-item">
                <a
                  href="/zaga"
                  class="project-item w-inline-block"
                ><div class="project-item-image-holder">
                    <img
                      src={zagga}
                      alt=""
                      class="project-item-image"
                    />
                    <div
                      class="project-item-image-overlay"
                    ></div>
                  </div>
                  <div class="project-item-content">
                    <div class="perspective">
                      <div
                        class="perspective-load1-on-view"
                      >
                        <h3 class="project-item-title">Zagga</h3>
                        <div>
                          <p style={{ paddingLeft: "0", color: "#A0A0A0" }}>GRAPHIC DESIGN & VIDEO EDITING</p>
                        </div>
                      </div>
                    </div>
                    <div class="project-item-arrow-holder">
                      <img
                        src="https://assets.website-files.com/60586ee6b54d92a3bcaebe89/6059ee1ef0159c167c9f0385_Link-Arrow.svg"
                        alt=""
                        class="project-item-arrow"
                      />
                    </div></div
                  ></a>
              </div>
              <div role="listitem" class="project-collection-item w-dyn-item">
                <a
                  href="/brands"
                  class="project-item w-inline-block"
                ><div class="project-item-image-holder">
                    <img
                      src={brands}
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1279px) 45vw, (max-width: 1439px) 592px, 672px"
                      class="project-item-image"
                    />
                    <div
                      class="project-item-image-overlay"
                    ></div>
                  </div>
                  <div class="project-item-content">
                    <div class="perspective">
                      <div
                        class="perspective-load1-on-view"
                      >
                        <h3 class="project-item-title">Brands in Quarantine</h3>
                        <div>
                          <p style={{ paddingLeft: "0", color: "#A0A0A0" }}>GRAPHIC DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div class="project-item-arrow-holder" >
                      <img
                        src="https://assets.website-files.com/60586ee6b54d92a3bcaebe89/6059ee1ef0159c167c9f0385_Link-Arrow.svg"
                        alt=""
                        class="project-item-arrow"
                      />
                    </div></div
                  ></a>
              </div>
              <div role="listitem" class="project-collection-item w-dyn-item">
                <a
                  href="/balaji"
                  class="project-item w-inline-block"
                ><div class="project-item-image-holder">
                    <img
                      src={balaji}
                      alt=""
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1279px) 45vw, (max-width: 1439px) 592px, 672px"
                      class="project-item-image"
                    />
                    <div
                      class="project-item-image-overlay"
                    ></div>
                  </div>
                  <div class="project-item-content">
                    <div class="perspective">
                      <div
                        class="perspective-load1-on-view"
                      >
                        <h3 class="project-item-title">Balaji Snacks</h3>
                        <div>
                          <p style={{ paddingLeft: "0", color: "#A0A0A0" }}>UI/UX & VISUAL DESIGN</p>
                        </div>
                      </div>
                    </div>
                    <div class="project-item-arrow-holder">
                      <img
                        src="https://assets.website-files.com/60586ee6b54d92a3bcaebe89/6059ee1ef0159c167c9f0385_Link-Arrow.svg"
                        alt=""
                        class="project-item-arrow"
                      />
                    </div></div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
