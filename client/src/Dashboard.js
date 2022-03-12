// Dependancies
import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import { Container, Form } from "react-bootstrap"
import Animation from "./animation"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
import { IoMusicalNotesSharp } from 'react-icons/io5'

//SpotifyAPI Client
const spotifyApi = new SpotifyWebApi({
  clientId: "8b945ef10ea24755b83ac50cede405a0",
})

//Dashboard
export default function Dashboard({ code }) {
  const accessToken = useAuth(code)

  //useStates
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  //ChooseTrack Functions
  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  //Lyric Search
  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  //Set AccessToken
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  //Render Search Results
  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <Container className="d-flex flex-column py-2 " style={{ height: "100vh", minWidth: "100vw", backgroundColor: '#F7BF50', }}>
      <div style={{ zIndex: 10 }} className="d-flex justify-content-between align-items-center px-4 py-2">
        {/* <img src={content.nav.logo} height="50rem" alt="bangeralert for Navbar" className='buttonHover' />
         */}
        <div className="d-flex align-items-center"  >
          <div className="" style={{ marginLeft: '-1rem', borderRight: '2px solid', marginRight: '.5rem', paddingRight: '.5rem' }}>
            <IoMusicalNotesSharp style={{ fontSize: '1.75rem' }} />
          </div>
          <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '1.5rem' }}>bangeralert</h1>
        </div>
        <Form.Control
          type="search"
          className="w-25"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClick={() => document.getElementById("tagline").classList.add("d-none")}
        />
      </div>


      <Animation />

      <div className="d-flex justify-content-center h-100
       overflow-y-auto " style={{ zIndex: 10 }}>


        <div className="flex-grow-1 my-2 " style={{ overflowY: "auto" }}>
          {searchResults.length === 0 && (
            <div className="text-center h5" style={{ whiteSpace: "pre", overflowY: "auto" }}>
              {lyrics}
            </div>
          )}
          {searchResults.map(track => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
      </div>
      <div className='fixed-bottom'>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </Container >
  )
}
