import React, { useEffect } from 'react'
// import Button from '../../components/Button';

function SnapSeek() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Participants should compete in teams of 2-4 members.",
        "Each team should designate a spokesperson.",
        "Each team's spokesperson will be provided with an online buzzer system (first press, first serve).",
        "Points will be based on the correct guesses."
    ];
    

    const round1 = [
        "Round 1 contains 7 slides.",
        "Each team’s score is recorded based on their correct answers.",
        "At the end of Round 1, the top 7 teams with the highest scores advance to Round 2."
    ];
    

    const round2 = [
        "Round 2 contains 5 slides.",
        "Final scores are tallied from both rounds to determine the overall winners."
    ];
    



    return (
        <>
            <div className='events'>
                <div className="count-h">Minute to Win It</div>
                <div className="count-p">Non tech</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/nontech/2.png" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: -5, display: 'flex', justifyContent: 'center' }}>
                            {/* <Button /> */}

                        </div>
                        <h5 className='event-phone' style={{ textAlign: 'center', marginTop: 34, fontSize: 21 }}>+91 7200642537</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Sharan Shri Ram. V</h5>
            <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Closed)</h6>
                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>Lights, Camera, Buzz! Race to buzz in when the image pops up.
                            Get it right for points, miss it and lose.
                        </p>
                        <h2>Rules</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <h2>Round-1</h2>
                        <ul>
                            {round1.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <h2>Round-2</h2>
                        <ul>
                            {round2.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Kesavapriya P</p>
                            <p>Sharan Shri Ram V</p>
                            <p>Tholkappiyan E</p>
                            <p>Bala Krishnan P</p>
                            <p>Tamizhselvi B</p>
                        </ul>



                    </div>

                </div>
                {/* <div style={{margin: 'auto', textAlign: 'center'}}>
                    <Button></Button>
                </div> */}
            </div>

        </>
    )
}

export default SnapSeek