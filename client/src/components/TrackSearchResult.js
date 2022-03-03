import React from 'react'

export default function TrackSearchResult({ track }) {
    return (
        <div className="flex m-2 items-center">
            <img src={track.albumUrl} className="h-16 w-16" ></img>
            <div className="m-l-3">
                {track.title}
            </div>
        </div>
    )
}
