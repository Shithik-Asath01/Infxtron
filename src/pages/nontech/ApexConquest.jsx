import React, { useEffect } from 'react'
// import Button from '../../components/Button';

function ApexConquest() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Player must compete individually (*solo only) ",
        "Friendly match 1 - A casual gameplay mode without price, for practice and enjoyment.",
        "BGMI Competitive match 1- (price) (Erangel Map)",
        "FREE FIRE Competitive match 2- (price)(Purgatory,Kalahari)",
        "No Teamups Allowed,If found the person will be disqualified",
        "It is advised to use your own netowrk connection during the gameplay",
        "Try to bring your own accessories (i.e., Chargers, headsets) "
    ];

    return (
        <>
            <div className='events'>
                <div className="count-h">Whisper Chain</div>
                <div className="count-p">non tech</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/nontech/8.png" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: -5, display: 'flex', justifyContent: 'center' }}>
                            {/* <Button /> */}

                        </div>
                        <h5 className='event-phone' style={{ textAlign: 'center', marginTop: 34, fontSize: 21 }}>+91 6380381466</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Jana Muthuraj M</h5>
            <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Closed)</h6>

                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>
                        Aim for the pinnacle and conquer the battlefield of BGMI & FREE-FIRE.
                        </p>
                        <h2>RULES</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                       <p style={{margin: '12px 0'}}><i style={{color: 'orange'}} className='bx bxs-notepad' ></i> <strong>Note:</strong> Slight Modifications can be made for the competitive matches based on the registration count.</p>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Akilan M</p>
                            <p>Sakthivinash B</p>
                            <p>Jana Muthuraj M</p>
                            <p>Karthikeyan K</p>
                            <p>Prabu V</p>
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

export default ApexConquest