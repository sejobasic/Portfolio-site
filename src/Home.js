import React from 'react'
// import star from './assets/star1.svg'
import sejo from './assets/sejo2.png'

function Home() {
  return (
    <div className='home'>
            <img className='logo' src={sejo} alt="sejo logo" />
      <div className="container">
          <div className="container1">
              <div className="txt-line" id="sejo">
                <p>Sejo Basic</p>
              </div>
          </div>
          <div></div>
      </div>
      <div className="left-side-quote">
        <p>I AM A SOFTWARE ENGINEER AND GRAPHIC DESIGNER WITH A FOCUS ON, <br /> 
        BUT NOT LIMITED TO, FRONT-END DEVELOPMENT AND CREATIVE DESIGN. <br />
        WITH A BACKGROUND IN DESIGN, I BRING ARTISTIC DETAIL TO FRONT-END DEVELOPMENT. <br />
        MY PASSION FOR CREATIVITY MOTIVATES ME TO CONTINUOUSLY EXPAND MY SKILL SET <br />
        THROUGH NEW TECHNOLOGIES, INSPIRE OTHERS, AND WORK COLLECTIVELY TO BRING NEW IDEAS TO LIFE.
        </p>
      </div>
      <div className="container">
          <div></div>
          <div className="container2">
          <div className='wrapper'>
            <div className="txt-line-title" id="digital">
            <hr></hr>
                <span>Creative Developer</span>
                <span>Graphic Designer</span>
                <span>Musician</span>
                <span>Artist</span>
                <span>Creative Developer</span>
            </div>
          </div>
          </div>
      </div>
      {/* <div className="star-svg">
          <img src={star} alt="star icon" />
      </div> */}
    </div>
  )
}

export default Home