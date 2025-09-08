import React, { useEffect } from "react";
// import Button from "../components/Button";

function Mindscape() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const topics = [
    "AI in daily life",
    "The future of transportation",
    "AI in education",
    "ML for productivity",
    "Blockchain for data analytics",
    "Data-driven consumer experience",
    "Your innovative ideas",
  ];

  const rules = [
    "Presentation should be done in English",
    "Team should comprise of only 3 members",
    "Individual participation is also encouraged",
    "Maximum 7 min is provided for each presentation (5 min presentation, 2 min Q&A session)",
    "All participants are allowed to use a maximum of 12 slides",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">Paper Presentation</div>
        <div className="count-p">Paper Presentation</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/tech/6.png" width={450} alt="" />
            <div
              className="btn-ly"
              style={{
                marginTop: -5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Button /> */}
              
            </div>
            <h5 className='event-phone' style={{ textAlign: "center", marginTop: 28, fontSize: 21 }}>
              +91 9876543210
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              Asath
            </h5>

            <a target="_blank" href="https://drive.google.com/drive/folders/1B_bE0cwAyEb6qlJ1MPMa0NpQ14tzGc7b">
              <h6
                style={{
                  marginTop: 28,
                  cursor: "pointer",
                  fontSize: 21,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#c03aff",
                }}
              >
                <img
                  style={{ borderRadius: 0,width: '38px !importnat'}}
                  width={38}
                  src="/imgs/drive.png"
                  alt="google-drive"
                  className="eventIcon"
                />
                &nbsp;&nbsp;Upload Your PPT
              </h6>
            </a>

            <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Open)</h6>


          </div>
          <div className="info">
            <h2>Topics</h2>
            <ul>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>

            <h2>RULES</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Shyam Kumar A</p>
              <p>Kirupa D</p>
              <p>Aravind G</p>
              <p>Janani P</p>
              <p>Arun KH</p>
              <p>Sachin R</p>
            </ul>
          </div>
        </div>
        {/* <div style={{margin: 'auto', textAlign: 'center'}}>
                    <Button></Button>
                </div> */}
      </div>
    </>
  );
}

export default Mindscape;
