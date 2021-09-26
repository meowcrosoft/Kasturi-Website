import React from 'react'
import balaji from '../../images/balaji.png'
import balaji1 from '../../images/balaji1.png'
import Footer from '../../components/Footer/Footer';
import zaga from '../../images/Home Page Zagga.png';
import other from '../../images/other.png'
import other1 from '../../images/other1.png'
import other2 from '../../images/other2.png'


function Balaji() {
    return (
        <div>
            <div>
                <h1>
                    Balaji<br />
                    Snacks
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    UI/UX<br />
                    VISUAL DESIGN
                </p>
            </div>
            <div>
                <img src={balaji1} alt="" />
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "4em", paddingBottom: "4em" }}>
                <div className="Group14" style={{ width: 1019, height: 370, position: 'relative' }}>
                    <p className="TATA" style={{ left: 0, top: 0, position: 'absolute', fontSize: 52, lineHeight: '100%', color: 'black', }}>BALAJI</p>
                    <p className="2018- 2019" style={{ left: 0, top: 349, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2018 - 2019</p>
                    <p className="MadisonWorld" style={{ left: 0, top: 318, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>Madison World</p>
                    <a href="https://www.balajiwafers.com/"><p className="Clickhere to visit TATA Nutrikorner" style={{ left: 273, top: 349, position: 'absolute', fontSize: 18, lineHeight: '100%', textDecoration: 'underline', color: 'rgba(0, 10.20, 255, 1)', }}>Click here to visit Balaji Snacks</p></a>
                    <p className="Theobjective of the brief was to cater to the need for online research with the right kind of content, Enable sale and intelligible data collection and use it to further enable the sale. The main aim was to create a shopping experience so good, convenient, user friendly that people who do use it are convinced to use it again and again. This project was taken up as my Graduation project. Since the website needed a rebrand, few steps followed are Market research, TA study, Site analysis, Setting up a USP. My role was to create graphics such are icons, buttons, color palette, typography. Designing layouts and wireframes. Content research and editing along with the team for articles, blogs, and social media. Designing Banners and Social Media posts for the website. Image editing for the site and banners. Tata Nutrikart now renamed Tata Nutrikorner was launched in July 2019 and is now live." style={{ width: 900, height: 287, left: 273, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1.5, color: 'black', }}>Balaji Wafers launched its new look website which I was responsible for designing inside out. The redesign was very extensive and included new features such as customer reviews, videos, quick view products, an easily accessible menu, and an interactive website.
                        The redesign made it faster and easier for customers to shop and overall provided them with a more interactive and enjoyable experience. With the introduction of the new checkout design, revenue & conversion rate grew substantially.</p>
                </div>
            </div>
            <div>
                <img style={{paddingLeft:"50px"}} src={balaji} alt=""></img>
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
                                        href="/burger"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={other1}
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
                                                    <h3 class="project-item-title">Burger King</h3>
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
                                        href="/vermillion"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={other2}
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
                                                    <h3 class="project-item-title">Vermillion</h3>
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

export default Balaji;
