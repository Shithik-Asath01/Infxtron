import React from 'react'

function Services() {
  return (
    <div className="grid-services" style={{ position: 'relative' }}>
        <div className="card">
          <div className="dotted-design" style={{ top: 9}}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <i className="bi bi-patch-check-fill"></i>
          <p>Participant Certificates</p>
          <div className="dotted-design" style={{ }}>
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card">
          <div className="dotted-design">
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <i className='bx bxs-bowl-hot' ></i>
          <p>Complimentary Lunch</p>
          <div className="dotted-design down">
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card">
          <div className="dotted-design">
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <i className='bx bx-money'></i>
          <p>Shield & Cash Prizes</p>
          <div className="dotted-design down">
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        <div className="card">
          <div className="dotted-design">
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          <i className='bx bxs-cookie' ></i>
          <p>Snacks and Beverage</p>
          <div className="dotted-design down">
            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
        </div>

        
      </div>
  )
}

export default Services