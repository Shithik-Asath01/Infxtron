import React, { useEffect } from 'react'
// import Button from '../../components/Button';

function GreyScale() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Complete the challenge within 45 minutes.",
        "Work individually without collaboration.",
        "Create at least three screens.",
        "Bring your laptop with preferred design software. (Figma, Sketch, etc)"
    ];
    



    

    return (
        <>
            <div className='events'>
                <div className="count-h">Code Storm</div>
                <div className="count-p">UI/UX Design</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/tech/9.png" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
                            {/* <Button /> */}

                        </div>
                        <h5 className='event-phone' style={{ textAlign: 'center', marginTop: 12, fontSize: 21 }}>+91 9361341593</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Madheshwaran M</h5>
            <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Closed)</h6>

                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>UI/UX design focuses on creating user-friendly interfaces and experiences by understanding user needs,
                            behaviors, and goals. It involves visual design,
                            interaction design, and usability testing to ensure intuitive and engaging designs
                        </p>
                        <h2>Rules</h2>
                        <ul>
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <h2>Themes</h2>
                        <ul style={{textAlign: 'center', listStyle: 'none'}} > 
                           <li><i className="bi bi-instagram"></i> Social Media</li>
                           <li><i className='bx bxs-bowl-hot' ></i> Food Delivery</li>
                           <li><i className="bi bi-cart"></i> Ecommerce</li>
                           <li><i className="bi bi-music-note-list"></i> Music App</li>
                        </ul>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            {/* <p>Madheshwaran M</p>
                            <p>Sethu Raja P</p>
                            <p>Sakthivinash B</p>
                            <p>Varsha S</p>
                            <p>Ramya S</p>
                            <p>Kamini V</p> */}
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

export default GreyScale