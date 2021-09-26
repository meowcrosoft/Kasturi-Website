import React from 'react'
import burger from '../../images/burger.png'
import burger1 from '../../images/burger1.png'
import Footer from '../../components/Footer/Footer';
import zaga from '../../images/Home Page Zagga.png';
import other from '../../images/other.png'
import masina from '../../images/masina1.png'
import balaji from '../../images/Home Page Balaji Snacks.png'

function Burger() {
    return (
        <div>
            <div>
                <h1>
                    Burger<br />
                    King
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    Graphic<br />
                    Design
                </p>
            </div>
            <div>
                <img src={burger} alt="" />
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "4em", paddingBottom: "4em" }}>
                <div className="Group14" style={{ width: 1019, height: 370, position: 'relative' }}>
                    <p className="TATA" style={{ left: 0, top: 0, position: 'absolute', fontSize: 52, lineHeight: '100%', color: 'black', }}>BURGER<br />KING</p>
                    <p className="MadisonWorld" style={{ left: 0, top: 150, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2018</p>
                    <p className="Theobjective of the brief was to cater to the need for online research with the right kind of content, Enable sale and intelligible data collection and use it to further enable the sale. The main aim was to create a shopping experience so good, convenient, user friendly that people who do use it are convinced to use it again and again. This project was taken up as my Graduation project. Since the website needed a rebrand, few steps followed are Market research, TA study, Site analysis, Setting up a USP. My role was to create graphics such are icons, buttons, color palette, typography. Designing layouts and wireframes. Content research and editing along with the team for articles, blogs, and social media. Designing Banners and Social Media posts for the website. Image editing for the site and banners. Tata Nutrikart now renamed Tata Nutrikorner was launched in July 2019 and is now live." style={{ width: 900, height: 287, left: 273, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1.5, color: 'black', }}>The project started as a live brief (classroom project) assigned to me during my exchange program at UCA. The project falls under the course of Advertising and Communication. The brief given to us was to create an Ad. Campaign generating the idea of “How Burger King Flame Grills Their Burger Patty”.
                        My main idea behind this project was to promote the experience of having a Burger King. The project included few pieces of Ad. The campaign along with a rough VR experience. The campaign follows #flamegrilledsince1954. The whole concept involves not only reading and believing the content but actually experiencing it at the Burger King outlet.</p>
                </div>
            </div>
            <div>
                <img src={burger1} alt=""></img>
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
                                        href="/masina"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={masina}
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
                                                    <h3 class="project-item-title">Masina Hospital</h3>
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
                                        href="/balaji"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={balaji}
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
                                                    <h3 class="project-item-title">Balaji Snacks</h3>
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

export default Burger