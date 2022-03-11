import React from 'react'
import './animate.css'
const animation = () => {
    return (
        <div style={{ position: 'fixed', zIndex: '0', width: '100%', marginLeft: '-1rem', marginTop: '-1rem' }}>
            <div className="header">

                {/* <!--Content before waves--> */}
                <div className="inner-header flex">

                    <h1 id='tagline'>Search for a song to sing along</h1>
                </div>

                {/* <!--Waves Container--> */}
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
                {/* <!--Waves end--> */}

            </div>
            {/* <!--Header ends--> */}

            {/* <!--Content starts--> */}
            <div className="content flex">
                {/* <p>By.Goodkatz | Free to use </p> */}
            </div>
            {/* <!--Content ends--> */}
        </div>
    )
}

export default animation