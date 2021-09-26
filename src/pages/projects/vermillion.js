import React from 'react'
import vermillion from '../../images/Rectangle 22.png'
import Footer from '../../components/Footer/Footer';
import tipsy from '../../images/Group 4.png'
import other from '../../images/other.png'

function Vermillion() {
    return (
        <div style={{ cursor: "pointer" }}>
            <div>
                <h1>
                    Vermillion
                </h1>
                <p style={{ textAlign: "right", color: "#FF00FF", paddingBottom: "60px" }}>
                    SCRIPTING<br />
                    VIDEOGRAPHY
                </p>
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
                <img src={vermillion} alt="" />
                <a href="https://www.youtube.com/watch?v=j4PtFP0IQqU&feature=youtu.be" target="_blank" rel="noreferrer" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", cursor: "pointer", color: "white", fontSize: "1.5em" }}><p>Click here to watch video</p></a>
            </div>
            <div style={{ paddingTop: "4em", paddingLeft: "10em", paddingBottom: "4em", cursor: "pointer" }}>
                <div style={{ width: 1019, height: 370, position: 'relative', }}>
                    <p style={{ left: 0, top: 0, position: 'absolute', fontSize: 40, lineHeight: '100%', color: 'black', }}>MIT ADT<br/>University</p>
                    <p style={{ left: 0, top: 349, position: 'absolute', fontSize: 18, fontWeight: '500', lineHeight: '100%', color: 'rgba(160.44, 160.44, 160.44, 1)', }}>2018</p>
                    <a href="https://www.youtube.com/watch?v=j4PtFP0IQqU&feature=youtu.be" target="_blank" rel="noreferrer"><p style={{ left: 273, top: 349, position: 'absolute', fontSize: 18, lineHeight: '100%', textDecoration: 'underline', color: 'rgba(0, 10.20, 255, 1)', }}>Click here to view vermillion</p></a>
                    <p style={{ width: 746, height: 287, left: 273, top: 2, position: 'absolute', fontSize: 16, lineHeight: 1, color: 'black', }}>A classroom project with a brief given to developing a short film. The entire process consisted of storyboarding, scripting, location hunting, videography, editing, and sound production. The challenge here was to make something that looked good without the aid of professional equipment. This was a humble attempt at doing so with the help of lots of Pre Production planning and by using several Editing techniques, VFX compositing, and Cinematic Colour Grading. Also, an original score was composed for the same, to add a little more uniqueness to the project. This was made on a shoestring budget with nothing but an entry-level DSLR, a mid-range Laptop and sheer will.</p>
                </div>
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
                                                    <h3 class="project-item-title">Brands In Quarantine</h3>
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

export default Vermillion
