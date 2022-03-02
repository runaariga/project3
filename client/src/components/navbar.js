import React from 'react'
import content from '../content/index'
import spotifyLogo from '../assets/spotify.png'
import bangerLogo from '../assets/bangeralert-logos.jpeg'
const Navbar = (props) => {

    return (
        <div className={`flex justify-between items-center px-5 text-md pt-6 ${props.navStyle}`}>
            <div>
                <img src={bangerLogo} className='w-36 md:w-56' alt="" />
                {/* <h1 className="hidden md:flex">{content.nav.name}</h1>
                <h1 className=" md:hidden">{content.nav.smName}</h1> */}
            </div>
            <div className='flex'>

                {content.nav.links.map((a, i) => {

                    return (
                        <button>
                            <h1 className='mx-2 hidden font-bold hover:opacity-50 text-color: md:flex md:text-2xl'>{a}</h1>
                        </button>
                    )
                })
                }
                <div className='flex'>
                    <h1 className='mx-2 text-lg md:hidden'>{content.nav.links[2]}</h1>
                    <img src={spotifyLogo} className='w-8' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar