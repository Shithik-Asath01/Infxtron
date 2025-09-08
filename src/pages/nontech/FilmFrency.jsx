import React, { useEffect } from 'react'
// import Button from '../../components/Button';

function FilmFrency() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rules = [
        "Each team must obey the time limits set for each round.",
        "All the rounds are Knockout, so the eliminated teams can't participate in the next rounds.",
        "No electronic devices are allowed during the event to prevent cheating.",
        "Teams must maintain good sportsmanship throughout the competition.",
        "The decisions of the event organizers are final.",
        "The team which breaks the rules will be eliminated."
    ];
    
    

    const round1 = [
        "Each team selects one member to sketch a movie.",
        "That person has to sketch the movie within the allotted time.",
        "The person should not draw letters and numbers which directly represent the movie.",
        "The team which identifies more number of movies will qualify for the next round."
    ];
    
    

    const round2 = [
        "The background music (BGM) of the songs will be played, and the teams have to identify it.",
        "The first team to press the buzzer can answer.",
        "The answer will be in three categories: Song Name, Movie Name, and Music Director’s Name. Each category carries 10 marks (Total 30 marks).",
        "The teams with higher points can qualify for the next round."
    ];
    
    const round3 = [
        "A team of 3 members will be given 3 balloons, and they have to tap the balloons to build a paper cup tower.",
        "The person who lets the balloon touch the ground will be eliminated.",
        "The team which builds a tower with the highest number of cups will be the winner of the event."
    ];    
    



    return (
        <>
            <div className='events'>
                <div className="count-h">Just Imagine</div>
                <div className="count-p">Unravel Challenging</div>

                <div className="d-flex">
                    <div className="img">
                        <img src="/imgs/nontech/4.png" width={450} alt="" />
                        <div className="btn-ly" style={{ marginTop: 25, marginBottom: 12,display: 'flex', justifyContent: 'center' }}>
                            {/* <Button /> */}

                        </div>
                        <h5 className='event-phone' style={{ textAlign: 'center', marginTop: 2, fontSize: 21 }}>+91 8056985449</h5>
                        <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Mokeshwar. P</h5>
            <h6 style={{ textAlign: "center", marginTop: 12,color: '#ffffff59'}}>(Registration Closed)</h6>

                    </div>
                    <div className="info">
                        <h2>Description</h2>
                        <p>
                        Get ready for “Film Frenzy"! Teams Sketch  famous movie clues,
                         Find Songs from the BGM, and Build paper cup Towers by facing a challenge. 
                         Can your team decipher the clues, recall iconic Lyrics , and unravel Challenging tasks ?
                         It's a event of laughter, teamwork, and movie magic!
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

                        <h2>Round-3</h2>
                        <ul>
                            {round3.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>

                        <ul className='students'>
                            <h2>Coordinators</h2>
                            <p>Mokeshwar. P</p>
                            <p>Gokul. R</p>
                            <p>Michael Sebastin. L</p>
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

export default FilmFrency