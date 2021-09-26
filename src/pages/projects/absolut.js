import React from 'react'
import absolut from '../../images/absolut.png'
import absolut1 from '../../images/absolut1.png'
import Footer from '../../components/Footer/Footer';
import zaga1 from '../../images/Home Page Zagga.png'
import other from '../../images/other.png'

function Absolut() {
    return (
        <div>
            <div>
                <h1>
                    Absolut
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    GRAPHIC DESIGN
                </p>
            </div>
            <div>
                <img src={absolut} alt="" />
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "4em", paddingBottom: "4em" }}>
                <div style={{ width: 1175, height: 223, }}>
                    <div style={{ width: 1175, height: 223, }}>
                        <div style={{ width: 1175, height: 223, position: 'relative', }}>
                            <p style={{ left: 0, top: 0, position: 'absolute', fontSize: 52, lineHeight: '100%', color: 'black', }}>UNIVERSITY <br/>FOR THE <br/>CREATIVE ARTS</p>
                            <p style={{ left: 0, top: 197, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2018</p>
                            <p style={{ width: 683, height: 221, left: 492, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1.5, color: 'black', }}>Video Palace approached 96 Studios and asked us to create a video for a newly launched music album. Since the album was releasing during the so-called ‘wedding season in India, the song hence titled the Wedding Song of the Year. They also wanted us to create a logo for the same along with social media content.<br />This song is called Zagga which represents the sari, skirt, or any free wear especially worn by an Indian bride. My key responsibility in this project was editing the ﬁrst draft of the video, creating a logo, and designing social media content like banners and posts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={absolut1} alt=""></img>
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
                                                src={zaga1}
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
                                                    <h3 class="project-item-title">BRANDS IN QUARANTINE</h3>
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

export default Absolut;
