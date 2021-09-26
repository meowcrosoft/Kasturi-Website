import React from 'react'
import Footer from '../../components/Footer/Footer';
import masina1 from '../../images/masina1.png'
import tipsy from '../../images/tipsy.png'
import tipsy1 from '../../images/tipsy1.png'
import tata from '../../images/Home Page Nutrikart.png'
import absolut from '../../images/Rectangle 18.jpg'

function Tipsy() {
    return (
        <div>
            <div>
                <h1>
                    Tipsy<br/>
                    Tota
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    GRAPHIC DESIGN
                </p>
            </div>
            <div>
                <img src={tipsy1} alt="" />
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "8em", paddingBottom: "4em", cursor: "pointer" }}>
                <div style={{ width: 1175, height: 223, }}>
                    <div style={{ width: 1175, height: 223, }}>
                        <div style={{ width: 1175, height: 223, position: 'relative', }}>
                            <p style={{ left: 0, top: 0, position: 'absolute', fontSize: 52, lineHeight: '100%', color: 'black', }}>MIT ADT<br/>UNIVERSITY</p>
                            <p style={{ left: 0, top: 197, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2018-2019</p>
                            <p style={{ width: 683, height: 221, left: 492, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1.5, color: 'black', }}>Tipsy Tota started out as a class room project. The brief was to create a new absurd line of soft drinks in quirky, misshapen bottles. Name of the drink and to describe the product concept. My main brand values come from the mere thought that, When everything in out country comes with a pinch of drama, how can we keep ourselves from adding the same to our favourite Friday beverage? Tipsy Tata is all set to tickle the taste buds of the real Desi, with an eccentric line of authentic spice flavoured beers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img style={{ paddingLeft: "50px" }} src={tipsy} alt=""></img>
            </div>
            <div style={{ padding: "1.5em" }}>
                <h3 style={{ color: "#FF00FF" }}>Other Projects...</h3>
            </div>
            <div>
                <div class="section">
                    <div class="container">
                        <div class="w-dyn-list">
                            <div role="list" class="project-collection-list w-dyn-items">
                                <div role="listitem" class="project-collection-item w-dyn-item">
                                    <a
                                        href="/tata"
                                        class="project-item w-inline-block"
                                    ><div class="project-item-image-holder">
                                            <img
                                                src={tata}
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

export default Tipsy
