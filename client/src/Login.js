import React from "react"
import { Container, Button } from "react-bootstrap"
import content from "./content/index.js"
import Typical from 'react-typical';
import Hero from './Hero'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=a8c25ab3bd1e48f6a93154cf69c1d709&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const btnStyle = { backgroundColor: '#5A4114', color: 'white', fontWeight: '900', border: '2px solid white' }


export default function Login() {
  return (
    <Container
      className="d-flex flex-column justify-content-between align-items-center py-4 "
      style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: "#F7BF50", color: '#4D370F', }}
    >
      {/* Navbar for login */}
      <Container className="d-flex justify-content-between align-items-center ">
        <img src={content.nav.logo} height="50rem" alt="bangeralert for Navbar" className='buttonHover' />
        <div className="d-flex  align-items-center">
          <Button href={AUTH_URL} className="d-flex align-items-center rounded-pill buttonHover" style={btnStyle}>
            <p className="mx-2 my-auto">{content.nav.spotifyLogo[1]}</p>
            <img src={content.nav.spotifyLogo[0]} height="20rem" alt="bangeralert Logo for Navbar" />
          </Button>
        </div>
      </Container>
      <Container className="d-flex flex-column align-items-center   ">
        {/* <div className='my-5'>
          <img src={content.hero.image} alt="" />
        </div> */}
        <Hero />
        <h2 className='font-weight-bold  mt-5'>{content.hero.hook}</h2>
        {/* <h3 className='font-weight-bold'></h3> */}
        <Typical
          steps={content.hero.typical}
          loop={Infinity}
          wrapper="h2"
          className={`font-weight-bold text-white `}
        />
      </Container>
      <Button href={AUTH_URL} className="d-flex rounded-pill mb-5 buttonHover" style={btnStyle}>
        <p className='my-auto'>{content.hero.button}</p>
      </Button>

    </Container>
  )
}
