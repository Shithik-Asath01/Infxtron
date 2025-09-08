import React from 'react'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
        <div className="d-flex">
            <div className="copy-rights">
                <h4>COPYRIGHT © INFXTRON2025</h4>
            </div>
            <div className="social-links">
            <i className='bx bxl-instagram'></i> <a target='_blank' href="https://www.instagram.com/infxtron25">INFXTRON</a>
            </div>
        </div>
    </div>
  )
}

export default Footer