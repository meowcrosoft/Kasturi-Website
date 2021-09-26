import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div style={{cursor:"pointer",width:"100%"}}>
      <div style={{ backgroundColor: "black", height: "800px" }}>
        <h2 style={{ color: "white", paddingLeft: "60px", paddingTop: "50px" }}>Let's Talk<br />
          But you first!
        </h2>
        <div style={{ backgroundColor: "black" }}>
          <form action="" style={{ backgroundColor: "black" }} >
            <span style={{ display: "inline-block" }}>
              <p style={{ backgroundColor: "black", borderRadius: "5px", width: "600px" }}>
                <label for="" style={{ color: "white" }}>Name</label >
                <input type="text" style={{ borderRadius: "5px" }} />
              </p>
            </span>
            <span style={{ display: "inline-block" }}>
              <p style={{ backgroundColor: "black", borderRadius: "5px", width: "600px" }}>
                <label for="" style={{ color: "white" }}>E-mail</label>
                <input type="email" style={{ borderRadius: "5px" }} />
              </p>
            </span>
            <p style={{ backgroundColor: "black", borderRadius: "5px" }}>
              <label for="" style={{ color: "white" }}>Message</label>
              <textarea name="" id="" cols="30" rows="7" style={{ borderRadius: "5px" }}></textarea>
            </p>
            <p>
              <button style={{ color: "white", borderColor: "white" }} >Send</button>
            </p>
          </form>
        </div>
      </div>
      <div>
        <div class='some-page-wrapper'>
          <div class='row'>
            <div class='column'>
              <div class='green-column'>
                <p style={{ textAlign: "center", padding: "50px", fontWeight: "bold" }}>
                  KASTURI M. KOLI
                </p>
              </div>
            </div>
            <div class='column'>
              <div class='blue-column' >
                <p style={{ textAlign: "center", padding: "50px", color: "#A5A5A5" }}>
                  @kasturi.koli
                </p>
              </div>
            </div>
            <div class='column'>
              <div class='orange-column' style={{ textAlign: "center", padding: "50px", fontWeight: "bold" }}>
                You can also find me on:<span> <a href="https://www.instagram.com/lost_and_found_bubbles/"><i style={{width:"60px"}} class="fab fa-instagram fa-lg"></i></a>
                <a href="https://www.linkedin.com/in/kasturi-koli-6a861b156/"><i class="fab fa-linkedin fa-lg"></i></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
