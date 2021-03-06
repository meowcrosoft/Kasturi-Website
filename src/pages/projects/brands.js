import React from 'react'
import brands from '../../images/brands.png'
import brands1 from '../../images/brands1.png'
import Footer from '../../components/Footer/Footer';
import zaga from '../../images/Home Page Zagga.png';
import other from '../../images/other.png'
import absolut from '../../images/Rectangle 18.jpg'
import tipsy from '../../images/Group 4.png'

function Brands() {
    return (
        <div>
            <div>
                <h1>
                    Brands in<br />
                    Quarantine
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    GRAPHIC DESIGN
                </p>
            </div>
            <div>
                <img src={brands} alt="" />
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "4em", paddingBottom: "4em" }}>
                <div className="Group14" style={{ width: 1019, height: 370, position: 'relative' }}>
                    <p className="TATA" style={{ left: 0, top: 0, position: 'absolute', fontSize: 52, lineHeight: '100%', color: 'black', }}>BALAJI</p>
                    <p className="2018- 2019" style={{ left: 0, top: 249, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2020</p>
                    <p className="MadisonWorld" style={{ left: 0, top: 218, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>Self initiated</p>
                    <p className="Theobjective of the brief was to cater to the need for online research with the right kind of content, Enable sale and intelligible data collection and use it to further enable the sale. The main aim was to create a shopping experience so good, convenient, user friendly that people who do use it are convinced to use it again and again. This project was taken up as my Graduation project. Since the website needed a rebrand, few steps followed are Market research, TA study, Site analysis, Setting up a USP. My role was to create graphics such are icons, buttons, color palette, typography. Designing layouts and wireframes. Content research and editing along with the team for articles, blogs, and social media. Designing Banners and Social Media posts for the website. Image editing for the site and banners. Tata Nutrikart now renamed Tata Nutrikorner was launched in July 2019 and is now live." style={{ width: 900, height: 287, left: 273, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1.5, color: 'black', }}>Brands all around the world faced the pandemic in their own way and so did their ads speak about it. The Global Lockdown in the time of COVID-19 has made itself relevant enough for us to acknowledge it. I decided to illustrate and brand-relevant content for some of the famous brands and how their meaning has changed in this period. I present to you #BrandsinQuarantine.
                        This idea was merely developed from a conversation on how brands??and their sales are being affected due to the global lockdown. This thought was further developed into a concept of how these brands have become a part of our life even during the pandemic situation, sitting at home/ napping/ ordering food from the kitchen to the couch/traveling over wires instead of countries, etc..
                        This is a self-initiated project started during the early days of the pandemic.</p>
                </div>
            </div>
            <div>
                <img style={{ paddingLeft: "50px" }} src={brands1} alt=""></img>
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
                                        href="/absolut"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={absolut}
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
                                                    <h3 class="project-item-title">Absolut</h3>
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
                                        href="/tipsy"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={tipsy}
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
                                                    <h3 class="project-item-title">Tipsy Tota</h3>
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

export default Brands
