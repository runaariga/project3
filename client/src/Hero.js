import React from 'react'
import content from "./content/index.js"
const Hero = () => {
    return (
        <div>
            <div className='my-5  d-flex cards'>
                {/* Replace images with album covers */}
                <div className="cardWrapper">
                    <img src={content.hero.image} className='card' alt=" " style={{ marginRight: '-7rem', }} />
                </div>
                <div className="cardWrapper">
                    <img src={content.hero.image2} className='card' alt=" " style={{ marginRight: '-7rem', }} />
                </div>
                <div className="cardWrapper">
                    <img src={content.hero.image5} className='card ' alt="" style={{}} />
                </div>
                <div className="cardWrapper">
                    <img src={content.hero.image4} className='card' alt="" style={{ marginLeft: '-7rem', }} />
                </div>
                <div className="cardWrapper">
                    <img src={content.hero.image3} className='card' alt="" style={{ marginLeft: '-7rem', }} />
                </div>


            </div>
        </div>
    )
}

export default Hero