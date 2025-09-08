import React, { useEffect } from 'react'
// import Button from '../../components/Button';

function Puzzlebytes() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Each team can have a maximum of two members.",
        "Do not discuss any strategy or logic of the program during a live contest.",
        "All Participants are expected to abide by the rules & regulations of the contest.",
        "Any Violation of the Rules & Regulations shall lead to the cancellation of the candidature from the competition.",
        "In case of any conflict, the decision of the jury panel will be final."
    ];

    const round1 = [
        "It will be a paper and pen round.",
        "25 multiple choice questions are provided.",
        "45 minutes for Round 1.",
        "From the first round, top 8 members or teams are selected."
    ];

    const round2 = [
        "It will be a debugging of given code.",
        "3 questions with errors are given. You have to rectify the errors.",
        "30 minutes given for this round."
    ];
    


    return (
        <>
            <div className='events'>
                <div className="count-h">FOCUS FIESTA</div>
                <div className="count-p">non tech</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/nontech/12.png" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: -5, display: 'flex', justifyContent: 'center' }}>
                            {/* <Button /> */}

                        </div>
                        <h5 className='event-phone' style={{ textAlign: 'center', marginTop: 28, fontSize: 21 }}>+91 9500437641</h5>
                        <h5  style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Kishoth S</h5>
            <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Closed)</h6>

                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>Debugging is an programming event, which finds
                            and resolves defects or problems within a computer
                            program that prevent correct operation of c
                            omputer software or a system.
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
                            <p>Aravinth S</p>
                            <p>Kishoth S</p>
                            <p>Siva Ranjini M</p>
                            <p>Rakesh T</p>
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

export default Puzzlebytes