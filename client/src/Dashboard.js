import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import { Container, Form } from "react-bootstrap"
import Animation from "./animation"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"

import { IoMusicalNotesSharp } from 'react-icons/io5'
// import Dashnav from "./Dashnav"
const spotifyApi = new SpotifyWebApi({
  clientId: "8b945ef10ea24755b83ac50cede405a0",
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

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

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

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
  // let user = '';
  // spotifyApi.getMe()
  //   .then(function (data) {
  //     console.log('Some information about the authenticated user', data.body.id);
  //     user = data.body.id;
  //   }, function (err) {
  //     console.log('Something went wrong!', err);
  //   });
  // useEffect(() => {

  //   spotifyApi.getMySavedTracks({
  //     limit: 20,
  //     offset: 1
  //   })
  //     .then(function (data) {
  //       setSaved(data.body.items.map((tracks) => {


  //         return {
  //           // albumUrl: tracks.album.images[0],
  //           album: tracks.track.album,
  //           artists: tracks.track.artists[0],
  //           name: tracks.track.name,
  //           uri: tracks.track.uri,
  //         }
  //       }

  //       ))
  //       console.log('Done!', saved);
  //     }, function (err) {
  //       console.log('Something went wrong!', err);
  //     });

  // }, [saved, accessToken])
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
