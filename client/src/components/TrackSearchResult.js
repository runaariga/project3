import React from 'react'

export default function TrackSearchResult({ track }) {
    return (
        <div className="flex m-2 items-center">
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}
