import React from 'react'
import PlaceHolder from '../assets/assets.png'
import { ImShuffle, ImLoop } from 'react-icons/im'

import { AiFillPlayCircle, AiOutlineFastForward, AiOutlineFastBackward, AiFillSound } from 'react-icons/ai'


const MusicBar = (props) => {
    return (
        <div className={`grid grid-cols-3 w-full p-2 ${props.divStyle} fixed bottom-0 items-center `}>
            <div className="flex ">
                <div className="h-10   px-3  ">
                    <img src={PlaceHolder} className="h-16 items-center  border-2 border-white   " height="" alt="placeholder for album cover" />
                </div>
                <div className="flex flex-col items-center">

                    <h1 className="md:text-xl font-bold ">
                        Track title
                    </h1>
                    <h1 className="md:text-md">
                        Artists
                    </h1>
                </div>
                {/* like button */}
                {/* <div className={`flex items-center `}>
                    <h1 className="text-3xl">❤</h1>
                </div> */}

            </div>
            <div className="flex  flex-col  justify-self-center items-center w-10/12">
                {/* div for controls */}
                <div className=" grid grid-cols-5 gap-2 md:text-3xl items-center">
                    <ImShuffle />
                    <AiOutlineFastBackward />
                    <div className="md:text-5xl">
                        <AiFillPlayCircle />

                    </div>
                    <AiOutlineFastForward />
                    <ImLoop />

                </div>
                {/* playbar */}
                <div className="flex items-center">
                    <p className=" mx-2 md:text-xl">0:00</p>
                    <p className="mx-1 md:hidden">-</p>
                    <div className='w-0 md:w-80 bg-slate-300 h-2 rounded'></div>
                    <p className=" mx-2 md:text-xl">2:30</p>
                </div>

            </div>
            <div className="flex  md:text-3xl justify-self-end ">
                <AiFillSound />
            </div>
        </div >
    )
}

export default MusicBar