import React from 'react'
import masina from '../../images/Masina.png'
import masina2 from '../../images/masina2.png'
import Footer from '../../components/Footer/Footer';
import zaga from '../../images/Home Page Zagga.png';
import other from '../../images/other.png'

function Masina() {
    return (
        <div>
            <div>
                <h1>
                    Masina<br />
                    Hospital
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    UI/UX<br />
                    Visual Design
                </p>
            </div>
            <div>
                <img src={masina} alt="" />
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "4em", paddingBottom: "4em" }}>
                <div className="Group14" style={{ width: 1019, height: 370, position: 'relative' }}>
                    <p className="TATA" style={{ left: 0, top: 0, position: 'absolute', fontSize: 52, lineHeight: '100%', color: 'black', }}>Masina</p>
                    <p className="2018- 2019" style={{ left: 0, top: 349, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2018 - 2019</p>
                    <p className="MadisonWorld" style={{ left: 0, top: 318, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>Madison World</p>
                    <a href="http://www.masinahospital.com//"><p className="Clickhere to visit TATA Nutrikorner" style={{ left: 273, top: 349, position: 'absolute', fontSize: 18, lineHeight: '100%', textDecoration: 'underline', color: 'rgba(0, 10.20, 255, 1)', }}>Click here to visit Masina Hospital website</p></a>
                    <p className="Theobjective of the brief was to cater to the need for online research with the right kind of content, Enable sale and intelligible data collection and use it to further enable the sale. The main aim was to create a shopping experience so good, convenient, user friendly that people who do use it are convinced to use it again and again. This project was taken up as my Graduation project. Since the website needed a rebrand, few steps followed are Market research, TA study, Site analysis, Setting up a USP. My role was to create graphics such are icons, buttons, color palette, typography. Designing layouts and wireframes. Content research and editing along with the team for articles, blogs, and social media. Designing Banners and Social Media posts for the website. Image editing for the site and banners. Tata Nutrikart now renamed Tata Nutrikorner was launched in July 2019 and is now live." style={{ width: 900, height: 287, left: 273, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1.5, color: 'black', }}>The objective of the brief was to cater to the need for online research with the right kind of content, Enable sale and intelligible data collection and use it to further enable the sale. The main aim was to create a shopping experience so good, convenient, user friendly that people who do use it are convinced to use it again and again. This project was taken up as my Graduation project.
                        Since the website needed a rebrand, few steps followed are Market research, TA study, Site analysis, Setting up a USP. My role was to create graphics such are icons, buttons, color palette, typography. Designing layouts and wireframes. Content research and editing along with the team for articles, blogs, and social media. Designing Banners and Social Media posts for the website. Image editing for the site and banners. Tata Nutrikart now renamed Tata Nutrikorner was launched in July 2019 and is now live.</p>
                </div>
            </div>
            <div>
                <img src={masina2} alt=""></img>
            </div>
            <div style={{ padding: "4em" }}>
                <h3 style={{ color: "#FF00FF" }}>Other Projects...</h3>
            </div>
            <div>
                <div class="section">
                    <div class="container">
                        <div class="w-dyn-list">
                            <div role="list" class="project-collection-list w-dyn-items">
                                <div role="listitem" class="project-collection-item w-dyn-item">
                                    <a
                                        href="/zaga"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={zaga}
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
                                                    <h3 class="project-item-title">Zaga</h3>
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
                                                src={other}
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
                                                    <h3 class="project-item-title">Brands in Quarantine</h3>
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
            </div>
            <Footer />
        </div>
    )
}

export default Masina
